import SongList from "./SongList";
import Pagination from "./Pagination";
import AddButton from "./AddButton";
import { Outlet } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

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
