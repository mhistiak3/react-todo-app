
import { useTodo } from "../context/TodoContext";
import Todo from "./Todo";

const TodoItems = () => {
 
  const { todos} = useTodo();
  
  return (
    <ul>
      {todos.length > 0
        ? todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        : <h1 className="text-gray-700 pl-5 pt-1">Your todo list is empty!</h1>}
    </ul>
  );
};

export default TodoItems;
