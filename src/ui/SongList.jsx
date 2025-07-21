import React, { useEffect } from "react";
import SongItem from "./SongItem.jsx";
import { readSong } from "../features/song/SongsSlice.jsx";
import { useDispatch, useSelector } from "react-redux";

function SongList() {
  const songs = useSelector((state) => state.songs.list);
  const page = useSelector((state) => state.songs.page);
  const limit = useSelector((state) => state.songs.limit);
  const loading = useSelector((state) => state.songs.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readSong({ page, limit }));
  }, [dispatch, page, limit]);
  if (loading) return <p>loading....</p>;

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
