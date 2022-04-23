import { TaskForm } from "./components/TaskForm";
import { Header } from "./components/Header";
import { TasksBody } from "./components/TasksBody";
import { GlobalStyles } from "./styles/GlobalStyles";
import { AppWrapper } from "./styles/AppWrapper";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export type todosObj = {
  id: number;
  text: string;
  completed: boolean;
  date: Date;
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<todosObj[]>(
    JSON.parse(localStorage.getItem("todos") || "") || []
  );
  const [status, setStatus] = useState<"All" | "completed" | "uncompleted">(
    "All"
  );
  const [sort, setSort] = useState<"oldest" | "newest">("oldest");
  const [filteredTodos, setFilteredTodos] = useState<todosObj[]>([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    filterTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterTodos = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <AppWrapper>
      <GlobalStyles />
      <Toaster />
      <Header />
      <TaskForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        date={date}
        setDate={setDate}
      />
      <TasksBody
        setStatus={setStatus}
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}
        sort={sort}
        setSort={setSort}
      />
    </AppWrapper>
  );
}

export default App;
