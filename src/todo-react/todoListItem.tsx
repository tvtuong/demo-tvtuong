import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="d-flex justify-content-between">
      <label
        onClick={() => {
          toggleTodo(todo);
        }}
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        className="text-label"
      >
        {todo.text}
      </label>
      {!todo.complete ? (
        <div
          className="icon m-1 true-icon"
          onClick={() => {
            toggleTodo(todo);
          }}
        >
          <i className="bi bi-check-circle"></i>
        </div>
      ) : (
        <div
          className="icon m-1 false-icon"
          onClick={() => {
            deleteTodo;
          }}
        >
          <i className="bi bi-slash-circle"></i>
        </div>
      )}
    </div>
  );
};
