import React from "react";
import { Link } from "react-router-dom";
import { deleteSong } from "../features/song/SongsSlice.jsx";
import { useDispatch } from "react-redux";
function SongItem({ song }) {
  const dispatch = useDispatch();
  if (!song) return null;
  const { id, title, artist, album, date } = song;

  function handleDelete(e) {
    e.preventDefault();
    console.log("delete get clicked");
    dispatch(deleteSong(id));
  }
  return (
    <div>
      <li>
        <Link className="link" to={`/songs/${id}`}>
          <span>{title}</span>
          <span>{artist}</span>
          <span>{album}</span>
          <span>{date}</span>
        </Link>
        <button onClick={handleDelete} className="delete">
          &times;
        </button>
      </li>
    </div>
  );
}

export default SongItem;
