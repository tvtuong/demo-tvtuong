import React, { useEffect, useState } from 'react';

const ExampleUseState: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');

  return (
    <div className="main">
      <input placeholder="type something..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <p>{inputValue}</p>
    </div>
  );
};

export default ExampleUseState;
