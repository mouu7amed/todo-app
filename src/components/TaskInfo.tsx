import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faSquareCheck,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { todosObj } from "../App";
import { TaskInfoWrapper } from "../styles/TaskInfoWrapper";
import moment from "moment";

type TaskInfoProps = {
  todo: todosObj;
  todos: todosObj[];
  setTodos: React.Dispatch<React.SetStateAction<todosObj[]>>;
};

export const TaskInfo = ({ todo, todos, setTodos }: TaskInfoProps) => {
  const checkedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <TaskInfoWrapper>
      <div className="task">
        <div className="left">
          <button className="checked" onClick={checkedHandler}>
            <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          </button>
          <button className="delete" onClick={deleteHandler}>
            <FontAwesomeIcon icon={faSquareXmark} className="icon" />
          </button>
          <p className={`task-text ${todo.completed ? "task-completed" : ""}`}>
            {todo.text}
          </p>
        </div>

        {todo.date && (
          <div className="right">
            <div className="ach-date">
              <FontAwesomeIcon icon={faHourglass} className="icon" />
              <p className="date">{moment(todo.date).format("Do MMM YYYY")}</p>
            </div>
          </div>
        )}
      </div>
    </TaskInfoWrapper>
  );
};
