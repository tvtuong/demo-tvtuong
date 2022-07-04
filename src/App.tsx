import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
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
import { user, wrapInArray } from './typescript/typescript';
import TypeScript from './typescript-react/TypeScript';
import TS from './typescript-react';
// import TicTacToe from "./tictactoe/index"
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
      {/* Bootstrap */}
      {/* <BaseBreadCrumb tab="Home" tab2="Detail" />
      <BaseNotification title="Xin Chào" text={`Bạn có ${value} tin nhắn`} />
    <BaseCard /> */}
      {/* <BaseBadge title="Message" value={value} onClick={handleClick} /> */}
      {/* ReactJS */}
      {/* <SetState />
      <HandlingEvent />
    <RefComponent /> */}
      {/* <Render /> */}
      {/* <button onClick={() => console.log(user)}>Hehe</button> */}
      {/* <button onClick={() => console.log(wrapInArray('xin chao'))}>Hihi</button> */}
      {/* <Comp children="Xin Chafo" /> */}

      <TS />
    </div>
  );
};

export default App;
