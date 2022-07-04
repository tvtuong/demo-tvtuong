import React from 'react';

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = React.useState('');
  return (
    <form className="d-flex justify-content-center form-add">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="input-add"
      />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
        className="btn-add"
      >
        +
      </button>
    </form>
  );
};
