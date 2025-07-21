import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout.jsx";
import SongDetails from "./features/song/SongDetails.jsx";
import EditeSong from "./features/song/EditSong.jsx";
import SongForm from "./features/song/SongForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/songs/:id", element: <SongDetails /> },
      { path: "/newsong", element: <SongForm /> },
      { path: "/edit/:id", element: <EditeSong /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
