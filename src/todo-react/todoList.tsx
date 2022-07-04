import React from 'react';
import './styles.scss';
import { TodoListItem } from './todoListItem';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}
export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoListItem key={Math.random()} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
