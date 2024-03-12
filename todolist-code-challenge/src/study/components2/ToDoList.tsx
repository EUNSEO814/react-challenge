import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import {
  Categories,
  categoryState,
  toDoSelector,
  toDoState,
} from "../atomsStudy";
import ToDo from "./ToDo";

const ToDOList = () => {
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // const toDos = useRecoilValue(toDoState);
  // console.log("ToDoList:toDos", toDos);

  // const selectorOutput = useRecoilValue(toDoSelector);
  // console.log("selectorOutput", selectorOutput);

  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  console.log(category);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}

      {/* <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr /> */}
    </div>
  );
};

export default ToDOList;
