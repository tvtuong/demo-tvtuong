import React, { useContext } from 'react';
import { InputValueContext } from './context-api';

export default function DemoContext() {
  const { state, dispatch } = useContext(InputValueContext);

  return (
    <div className="m-2">
      <p>Value: {state.inputValue}</p>
      <button onClick={() => dispatch({ type: 'SET_INPUT_VALUE_100' })}>SET VALUE TO 100</button>
    </div>
  );
}
