import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./GlobalStyles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;
