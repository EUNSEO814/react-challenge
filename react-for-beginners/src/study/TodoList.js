import { useState } from "react";
const TodoList = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((curArray) => [toDo, ...curArray]);
    setToDo("");
  };
  // console.log(toDo);
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos && toDos.map((toDo, index) => <li key={index}>{toDo}</li>)}
      </ul>
    </div>
  );
};
export default TodoList;
