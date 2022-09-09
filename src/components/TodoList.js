import { NewTodoForm } from "./NewTodoForm";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos = [{ text: "Go to the Gym" }] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);
