import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { inverseAdded } from "./SongsSlice.jsx";

function SongDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const loading = useSelector((state) => state.songs.isLoading);
  const isDelete = useSelector((state) => state.songs.delete);

  const song = useSelector((state) =>
    state.songs.list.find((s) => s.id === Number(id))
  );

  const dispatch = useDispatch();
  function handleNavigate() {
    dispatch(inverseAdded());
    navigate(`/songs/edit/${id}`);
  }
  if (!song) return;
  if (loading) return <p>loading...</p>;
  return (
    <div className="details">
      {!isDelete && (
        <>
          <h1>Song details</h1>
          <div className="details-main">
            <p> {song.title}</p>
            <p>{song.artist}</p>
            <p>{song.year}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              dolor, reprehenderit aspernatur commodi quod ab, illum a
              voluptatibus nulla nobis, totam facilis quia reiciendis eum
              quibusdam ea ex doloremque voluptates.
            </p>
          </div>

          <button className="btn btn-update" onClick={handleNavigate}>
            update
          </button>
        </>
      )}
    </div>
  );
}

export default SongDetails;
