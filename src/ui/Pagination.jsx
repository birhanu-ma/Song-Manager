import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageUp } from "../features/song/SongsSlice.jsx";
import { pageDown } from "../features/song/SongsSlice.jsx";

function Pagination() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.songs.list);
  const loading = useSelector((state) => state.songs.isLoading);
  const isDelete = useSelector((state) => state.songs.delete);

  function handlePaginationUp() {
    dispatch(pageUp());
  }
  function handlePaginationDown() {
    dispatch(pageDown());
  }
  if (song.length <= 0) return;
  return (
    <div className="next-previous">
      {!loading && !isDelete && (
        <>
          <button className="btn" onClick={handlePaginationDown}>
            previous
          </button>
          <button className="btn" onClick={handlePaginationUp}>
            next
          </button>
        </>
      )}
    </div>
  );
}

export default Pagination;
