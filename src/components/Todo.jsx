import {
  FaTrashAlt,
  FaEdit,
  FaCheckCircle,
  FaRegCircle,
  FaSave,
} from "react-icons/fa";
import { useTodo } from "../context/TodoContext";
import { useState } from "react";
const Todo = ({ todo }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsq, setTodoMsg] = useState(todo.todo);
  const { toggleComplete, deleteTodo, updateTodo } = useTodo();

  const saveTodo = (id, todoText) => {
    setIsEditable(false);
    updateTodo(id, todoMsq);
  };
  return (
    <li
      className={`flex items-center justify-between ${
        todo.completed ? "bg-purple-200" : "bg-gray-100"
      } rounded-lg px-4 py-2 mb-2 shadow-sm hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex items-center space-x-4">
        {todo.completed ? (
          <FaCheckCircle
            onClick={() => toggleComplete(todo.id)}
            className="text-green-500 cursor-pointer"
          />
        ) : (
          <FaRegCircle
            onClick={() => toggleComplete(todo.id)}
            className="text-green-500 cursor-pointer"
          />
        )}

        {isEditable ? (
          <input
            type="text"
            className="text-gray-800 bg-gray-200 border border-none focus:outline-none pl-3 pr-20 "
            value={todoMsq}
            onChange={(e) => setTodoMsg(e.target.value)}
          />
        ) : (
          <span className="text-gray-800">{todo.todo}</span>
        )}
      </div>
      <div className="flex items-center space-x-3">
        {isEditable ? (
          <FaSave
            onClick={() => saveTodo(todo.id)}
            className="text-blue-500 cursor-pointer"
          />
        ) : (
          <button disabled={todo.completed}>
            <FaEdit
              onClick={() => setIsEditable(true)}
              className={`${
                todo.completed ? "text-blue-300 " : "text-blue-500 "
              }cursor-pointer`}
            />
          </button>
        )}

        <FaTrashAlt
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 cursor-pointer"
        />
      </div>
    </li>
  );
};

export default Todo;

// 
// 
// 
//
// 
// 
// 
// 
// 
