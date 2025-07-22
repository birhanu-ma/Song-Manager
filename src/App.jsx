import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const SongDetails = lazy(() => import("./features/song/SongDetails.jsx"));
const EditSong = lazy(() => import("./features/song/EditSong.jsx"));
const SongForm = lazy(() => import("./features/song/SongForm.jsx"));
const NotFound = lazy(() => import("./pages/PageNotFound.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/songs",
    element: <AppLayout />,
    children: [
      { path: ":id", element: <SongDetails /> },
      { path: "edit/:id", element: <EditSong /> },
      { path: "newsong", element: <SongForm /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
