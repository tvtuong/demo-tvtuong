import React, { useState } from 'react';
import { TodoReduxApp } from './todo-redux/App';
type Props = {
  children?: React.ReactNode;
};

function Comp({ children }: Props) {
  return <div>{children}</div>;
}
const App: React.FC = () => {
  const handleClick = () => {
    setValue(value + 1);
  };
  const [value, setValue] = useState(20);
  return (
    <div className="App">
      <TodoReduxApp />
    </div>
  );
};

export default App;
