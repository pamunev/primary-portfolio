import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./routes/root.jsx";
import About from "./routes/about.jsx";
import Writing from "./routes/writing.jsx";
import ContentCreation from "./routes/contentCreation.jsx";
import Playwriting from "./routes/playwriting.jsx";
import Coding from "./routes/coding.jsx";
import Acting from "./routes/acting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/writing",
        element: <Writing />,
      },
      {
        path: "/content-creation",
        element: <ContentCreation />,
      },
      { path: "/playwriting", element: <Playwriting /> },
      { path: "/coding", element: <Coding /> },
      { path: "/acting", element: <Acting /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
