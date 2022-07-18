import { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';

const TestNemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ todo: '' }]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 10);
  };
  const addTodo = () => {
    const newTodo = { todo: 'New Todo' };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo.todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

const expensiveCalculation = (num: number) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default TestNemo;
