import React from "react";
import { Link } from "react-router-dom";
import { deleteSong } from "../features/song/SongsSlice.jsx";
import { useDispatch } from "react-redux";
function SongItem({ song }) {
  const dispatch = useDispatch();
  if (!song) return null;
  const { id, title, artist, album, year, thumbnail } = song;
  console.log(thumbnail);

  function handleDelete(e) {
    e.preventDefault();
    dispatch(deleteSong(id));
  }
  return (
    <li>
      <Link className="link" to={`/songs/${id}`}>
        <span>
          <img src={thumbnail} alt={`${title.slice(0, 4)}`} />
        </span>
        <span>{title.slice(0, 10)}</span>
        <span>{artist.slice(0, 10)}</span>
        <span>{album.slice(0, 10)}</span>
        <span>{year}</span>
      </Link>
      <button onClick={handleDelete} className="delete">
        &times;
      </button>
    </li>
  );
}

export default SongItem;
