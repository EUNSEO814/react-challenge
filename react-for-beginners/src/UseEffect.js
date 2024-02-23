import { useState, useEffect } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  //   console.log("i run all the time");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    console.log("i run only once");
  }, []);

  useEffect(() => {
    console.log("i run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);

  useEffect(() => {
    console.log("i run when 'keyword'& 'counter' changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};
export default UseEffect;
