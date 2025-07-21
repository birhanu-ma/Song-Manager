import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { inverseAdded } from "../features/song/SongsSlice";

function AddButton() {
  const navigate = useNavigate();
  const added = useSelector((state) => state.songs.added);
  const dispatch = useDispatch();

  function handleAddSong() {
    dispatch(inverseAdded());
    navigate("/newsong");
  }

  return (
    <div>
      {!added && (
        <button className="btn" onClick={handleAddSong}>
          Add Song
        </button>
      )}
    </div>
  );
}

export default AddButton;
