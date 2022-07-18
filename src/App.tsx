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
import { Counter } from './features/counters/counter';
import SimpleForm from './redux-form/ContactForm';
import SyncValidationForm from './redux-form/SyncValidation';
import SubmitValidationForm from './redux-form/SubmitValidationForm';
import AsyncValidationForm from './redux-form/AsyncValidationForm';
import InitializeFromStateForm from './redux-form/InitializeFromStateForm';
import TestNemo from './nemo';
type Props = {
  children?: React.ReactNode;
};
const sleep = (ms: number | undefined) => new Promise((resolve) => setTimeout(resolve, ms));
async function showResults(values: any) {
  await sleep(500); // simulate server latency
  console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
}

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
      {/* <Counter /> */}
      {/* <div style={{ padding: 15 }}>
        <h2>Simple Form</h2>
        <SyncValidationForm onSubmit={showResults} />
      </div>
      <div style={{ padding: 15 }}>
        <h2>Submit Validation</h2>
        <SubmitValidationForm onSubmit={showResults} />
      </div>
      <div style={{ padding: 15 }}>
        <h2>Asynchronous Validation</h2>
        <p>
          Usernames that will <em>fail</em> validation: <code>john</code>, <code>paul</code>, <code>george</code> or <code>ringo</code>.
        </p>
        <AsyncValidationForm onSubmit={showResults} />
      </div> */}
      {/* <div style={{ padding: 15 }}>
        <h2>Initialize From State</h2>
        <InitializeFromStateForm onSubmit={showResults} />
      </div> */}
      <TestNemo />
    </div>
  );
};

export default App;

//back up

{
  /* Bootstrap */
}
{
  /* <BaseBreadCrumb tab="Home" tab2="Detail" />
      <BaseNotification title="Xin Chào" text={`Bạn có ${value} tin nhắn`} />
    <BaseCard /> */
}
{
  /* <BaseBadge title="Message" value={value} onClick={handleClick} /> */
}
{
  /* ReactJS */
}
{
  /* <SetState />
      <HandlingEvent />
    <RefComponent /> */
}
{
  /* <Render /> */
}
{
  /* <button onClick={() => console.log(user)}>Hehe</button> */
}
{
  /* <button onClick={() => console.log(wrapInArray('xin chao'))}>Hihi</button> */
}
{
  /* <Comp children="Xin Chafo" /> */
}

{
  /* <TS /> */
}
