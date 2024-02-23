import { useState, useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("created!");
    return () => console.log("destroyed!");
  }, []);
  return <h1>hello!</h1>;
};

const Cleanup = () => {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
};

export default Cleanup;
