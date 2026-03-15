import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx"
import Movies from "./pages/Movies.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import { ContextProvider } from "./context/MoviesContext.jsx";
import Favorite from "./pages/Favorite.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movie/:id", element: <MovieDetail /> },
      { path: "/favorite", element: <Favorite /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>,
);
