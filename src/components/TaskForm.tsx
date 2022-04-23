import React, { Dispatch, SetStateAction, useState } from "react";
import DatePicker from "react-date-picker";
import toast from "react-hot-toast";
import { todosObj } from "../App";
import { TaskFormWrapper } from "../styles/TaskFormWrapper";

type TaskFormProps = {
  inputText: string;
  setInputText: Dispatch<SetStateAction<string>>;
  todos: todosObj[];
  setTodos: Dispatch<SetStateAction<todosObj[]>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
};

export const TaskForm = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  date,
  setDate,
}: TaskFormProps) => {
  const [count, setCount] = useState(1 + Math.random());

  const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + Math.random() * 10);

    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          id: count,
          text: inputText,
          completed: false,
          date: date,
        },
      ]);
    } else {
      toast("To-do text can't be null.");
    }

    setInputText("");
  };

  return (
    <TaskFormWrapper>
      <input
        type="text"
        className="task-input"
        value={inputText}
        onChange={inputHandler}
        placeholder="Add New .."
      />
      <DatePicker
        minDate={new Date()}
        value={date}
        onChange={(d: Date) => setDate(d)}
      />
      <button type="submit" className="add-task" onClick={submitHandler}>
        Add
      </button>
    </TaskFormWrapper>
  );
};
