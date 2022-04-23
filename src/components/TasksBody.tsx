import { TasksBodyWrapper } from "../styles/TasksBodyWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownShortWide } from "@fortawesome/free-solid-svg-icons";
import { TaskInfo } from "./TaskInfo";
import { todosObj } from "../App";

type TaskOptionsProps = {
  todos: todosObj[];
  setTodos: React.Dispatch<React.SetStateAction<todosObj[]>>;
  filteredTodos: todosObj[];
  setStatus: React.Dispatch<
    React.SetStateAction<"All" | "completed" | "uncompleted">
  >;
  sort: "oldest" | "newest";
  setSort: React.Dispatch<React.SetStateAction<"oldest" | "newest">>;
};

export const TasksBody = ({
  setStatus,
  filteredTodos,
  todos,
  setTodos,
  sort,
  setSort,
}: TaskOptionsProps) => {
  const statusHandler = (e: any) => {
    setStatus(e.target.value);
  };

  const sortHandler = (e: any) => {
    setSort(e.target.value);
    todos.reverse();
  };

  return (
    <TasksBodyWrapper>
      <div className="options">
        <div>
          <label>Filter</label>
          <select onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
        <div>
          <label>Sort</label>
          <select onChange={sortHandler}>
            <option value="oldest">Oldest</option>
            <option value="newest">Newest</option>
          </select>
          <FontAwesomeIcon icon={faArrowDownShortWide} className="icon" />
        </div>
      </div>
      {filteredTodos.map((todo) => {
        return (
          <TaskInfo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </TasksBodyWrapper>
  );
};
