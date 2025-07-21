import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSong, inverseAdded, updateSong } from "./SongSlice";

function SongForm({ song }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [year, setYear] = useState("");
  const added = useSelector((state) => state.songs.added);

  useEffect(() => {
    if (song) {
      setTitle(song.title || "");
      setArtist(song.artist || "");
      setAlbum(song.album || "");
      setYear(song.year || "");
    }
  }, [song]);

  function handleSubmit(e) {
    e.preventDefault();
    const songData = { title, artist, album, year };
    if (song) {
      dispatch(updateSong({ id: song.id, payload: songData }));
    } else {
      dispatch(createSong({ id: Date.now(), title, artist, album, year }));
      setTitle("");
      setAlbum("");
      setArtist("");
      setYear("");
    }
    dispatch(inverseAdded());
  }

  return (
    <div className="formContainer">
      {added && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="artist"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <input
            type="text"
            placeholder="album"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
          />
          <input
            type="date"
            placeholder="date"
            name="date"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <button className="btn" type="submit">
            {song ? "Update Song" : "Add Song"}
          </button>
        </form>
      )}
    </div>
  );
}

export default SongForm;
