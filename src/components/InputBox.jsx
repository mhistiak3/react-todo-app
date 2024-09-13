import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const InputBox = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault()
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex items-center mb-4">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:border-purple-500"
      />
      <button
        type="submit"
        className="py-2 px-4 bg-purple-600 text-white font-medium rounded-r-lg hover:bg-purple-700 transition duration-200"
      >
        Add
      </button>
    </form>
  );
};

export default InputBox;
