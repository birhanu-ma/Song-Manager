import { useEffect } from "react";
import SongItem from "./SongItem";
import { readSong } from "../features/song/SongsSlice";
import { useDispatch, useSelector } from "react-redux";

function SongList() {
  const songs = useSelector((state) => state.songs.list);
  const page = useSelector((state) => state.songs.page);
  const limit = useSelector((state) => state.songs.limit);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readSong({ page, limit }));
  }, [dispatch, page, limit]);

  if (!songs || songs.length === 0) return <p>No songs found. Add some!</p>;
  return (
    <ul className="">
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </ul>
  );
}

export default SongList;
