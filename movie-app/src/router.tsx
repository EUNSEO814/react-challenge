import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import ComingSoon from "./routes/ComingSoon";
import NowPlaying from "./routes/NowPlaying";
import Home from "./routes/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "movies/:id",
          },
        ],
      },
      {
        path: "coming-soon",
        element: <ComingSoon />,
        children: [
          {
            path: ":id",
          },
        ],
      },
      {
        path: "now-playing",
        element: <NowPlaying />,
        children: [
          {
            path: ":id",
          },
        ],
      },
    ],
  },
]);
