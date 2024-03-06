import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./screens/About";
import Home from "./screens/Home";
import Books from "./screens/Authors/Books";
import BookDetail from "./screens/Authors/BookDetail";
import Chapters from "./screens/Authors/Chapters";
import Characters from "./screens/Authors/Characters";
import NotFound from "./screens/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:authorURL",
        element: <Books />,
        children: [
          {
            path: ":bookURL",
            element: <BookDetail />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
