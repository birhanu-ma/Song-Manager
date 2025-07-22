import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const AppLayout = lazy(() => import("./ui/AppLayout.jsx"));
const SongDetails = lazy(() => import("./features/song/SongDetails.jsx"));
const EditeSong = lazy(() => import("./features/song/EditSong.jsx"));
const SongForm = lazy(() => import("./features/song/SongForm.jsx"));

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
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
export default App;
