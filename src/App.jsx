import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import TodoItems from "./components/TodoItems";
import { TodoProvider } from "./context/TodoContext";

const TodoUI = () => {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      todo,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // Update Todo
  const updateTodo = (id, todo) => {
    const updatedTodo = {
      id,
      todo,
      completed: false,
    };
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) => (eachTodo.id === id ? updatedTodo : eachTodo))
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((eachTodo) => eachTodo.id !== id));
  };

  // Toggle Completed Todo
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, completed: !eachTodo.completed }
          : eachTodo
      )
    );
  };

  // Fetch Todo
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
   
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="flex flex-col items-center p-20 min-h-screen bg-gradient-to-br from-purple-700 via-purple-500 to-purple-300">
        <div className="md:w-full md:max-w-md bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-center text-purple-800 mb-6">
            Todo List
          </h1>

          {/* Input Box */}
          <InputBox />

          {/* Todo Items */}
          <TodoItems />
        </div>
      </div>
    </TodoProvider>
  );
};

export default TodoUI;
