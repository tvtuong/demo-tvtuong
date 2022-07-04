import React from 'react';
import { AddTodoForm } from './AddTodoForm';
import './styles.scss';
import { TodoList } from './todoList';

const initialTodos: Todo[] = [];

const TodoApp: React.FC = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    if (text !== '') {
      const newTodo = { text, complete: false };
      setTodos([...todos, newTodo]);
    }
  };
  const deleteTodo: DeleteTodo = (taskNameToDelete: string) => {
    setTodos(
      todos.filter((data) => {
        return data.text != taskNameToDelete;
      })
    );
  };
  return (
    <div className="todo-app mx-auto rounded-3 p-2 ">
      <div className="header d-flex justify-content-center">
        <span className="todo-text mt-3">Todos</span>
      </div>
      <div className="content">
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
      <div className="footer">
        <AddTodoForm addTodo={addTodo} />
      </div>
      <div className="list-icon d-flex justify-content-evenly">
        <div className="icon-list">
          <i className="bi bi-list-check"></i>
        </div>
        <div className="icon-remove" onClick={() => setTodos(initialTodos)}>
          <i className="bi bi-x-circle-fill"></i>
        </div>
        <div className="icon-check">
          <i className="bi bi-check2-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
