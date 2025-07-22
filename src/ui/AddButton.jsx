import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inverseAdded } from "../features/song/SongsSlice.jsx";

function AddButton() {
  const navigate = useNavigate();
  const added = useSelector((state) => state.songs.added);
  const loading = useSelector((state) => state.songs.isLoading);
  const dispatch = useDispatch();

  function handleAddSong() {
    dispatch(inverseAdded());
    navigate("/songs/newsong");
  }

  return (
    <div>
      {!added && !loading && (
        <button className="btn" onClick={handleAddSong}>
          Add Song
        </button>
      )}
    </div>
  );
}

export default AddButton;
