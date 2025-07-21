import SongList from "../ui/SongList";
import Pagination from "../ui/Pagination";
import AddButton from "../ui/AddButton";
import { Outlet } from "react-router-dom";
import ThemeToggler from "../ui/ThemeToggler";

function AppLayout() {
  return (
    <div className="app">
      <ThemeToggler />
      <SongList />
      <Outlet />
      <Pagination />
      <AddButton />
    </div>
  );
}

export default AppLayout;
