import React, { useEffect, useState } from 'react';

const ExampleUseEffect: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count !== 0) document.title = `Bạn đã bấm ${count} lần`;
  }, [count]); // Chỉ re-run effect nếu giá trị count thay đổi

  return (
    <div>
      <p>Bạn đã bấm {count} lần</p>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default ExampleUseEffect;
