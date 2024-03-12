// import { useState } from "react";

// const ToDoList = () => {
//   const [toDo, setTodo] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setTodo(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// };

import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  userName: string;
  password: string;
  password1: string;
  extraError?: string;
}
const ToDoList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "password are not the same" },
        { shouldFocus: true }
      );
    }
    setError("extraError", { message: "server offline" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        {/* <input {...register("todo")} placeholder="Write a to do" /> */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "required",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no `nico` allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no `nick` allowed" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("userName", {
            required: "required",
            minLength: {
              value: 5,
              message: "Your username is too short.",
            },
          })}
          placeholder="UserName"
        />
        <span>{errors?.userName?.message}</span>
        <input
          {...register("password", { required: "Password is required." })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: "Password is required." })}
          placeholder="Password"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
};

export default ToDoList;
