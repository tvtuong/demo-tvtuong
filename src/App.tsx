import React, { useState } from 'react';
import BaseBadge from './bootStrap/components/badge';
import BaseBreadCrumb from './bootStrap/components/breadcrumb';
import BaseCard from './bootStrap/components/card';
import BaseNotification from './bootStrap/components/notification';
import SetState from './reactjs/componentAPI/set-state';
import FindDomNode from './reactjs/componentAPI/find-dom-node';
import LifeCycle from './reactjs/componentLifeCycle/life-cycle';
import HandlingEvent from './reactjs/handling-event';
import Render from './reactjs/lifting-state-up/render';
import RefComponent from './reactjs/refs';
// import TicTacToe from "./tictactoe/index"

const App: React.FC = () => {
  const handleClick = () => {
    setValue(value + 1);
  };
  const [value, setValue] = useState(20);
  return (
    <div className="App">
      {/* Bootstrap */}
      <BaseBreadCrumb tab="Home" tab2="Detail" />
      <BaseNotification title="Xin Chào" text={`Bạn có ${value} tin nhắn`} />
      <BaseBadge title="Message" value={value} onClick={handleClick} />
      <BaseCard />
      {/* ReactJS */}
      <SetState />
      <HandlingEvent />
      <Render />
      <RefComponent />
    </div>
  );
};

export default App;
