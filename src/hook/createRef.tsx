import React from 'react';

const ExampleCreateRef: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const mainRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={mainRef} className="main">
      <input type="text" placeholder="type something..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </div>
  );
};

export default ExampleCreateRef;
