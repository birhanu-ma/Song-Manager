import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SongForm from "./SongForm";

function EditeSong() {
  const { id } = useParams();
  const song = useSelector((state) =>
    state.songs.list.find((s) => s.id === Number(id))
  );
  console.log(song);

  return <SongForm song={song} />;
}

export default EditeSong;
