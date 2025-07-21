import { useDispatch, useSelector } from "react-redux";
import { pageUp } from "../features/song/SongsSlice";
import { pageDown } from "../features/song/SongsSlice";

function Pagination() {
  const dispatch = useDispatch();
  const song = useSelector((state) => state.songs.list);

  function handlePaginationUp() {
    dispatch(pageUp());
  }
  function handlePaginationDown() {
    dispatch(pageDown());
  }
  if (song.length <= 0) return;
  return (
    <div className="pagination">
      <button className="btn" onClick={handlePaginationDown}>
        previous
      </button>
      <button className="btn" onClick={handlePaginationUp}>
        next
      </button>
    </div>
  );
}

export default Pagination;
