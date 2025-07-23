import React from "react";

import SongList from "../ui/SongList.jsx";
import Pagination from "../ui/Pagination.jsx";
import AddButton from "../ui/AddButton.jsx";
import { Outlet } from "react-router-dom";
import ThemeToggler from "../ui/ThemeToggler.jsx";

function AppLayout() {
  return (
    <div className="app">
      <ThemeToggler />
      <div className="main">
        <div className="song">
          <SongList />
          <Outlet />
        </div>
        <div className="pagination">
          <Pagination />
          <AddButton />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
