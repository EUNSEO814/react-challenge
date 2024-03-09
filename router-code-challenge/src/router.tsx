import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Characters from "./routes/Characters";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Characters />,
      },
      {
        path: "character/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
