import React from 'react';
import useToggle from './custom-hook';

const ListData: React.FC = () => {
  const [show, toggle, close, open] = useToggle(false);
  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '2rem' }}>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={close}>
          Close
        </button>
        <button type="button" onClick={open}>
          Open
        </button>
      </div>
      {show && <div>This is the content to show or not</div>}
    </div>
  );
};

export default ListData;
