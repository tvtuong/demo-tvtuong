import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ExampleCreateRef from '../hook/createRef';
import EffectDemo from '../hook/effect-demo';
import ListData from '../hook/list-data';
import ExampleUseEffect from '../hook/useEffect';
import ExampleUseState from '../hook/useState';
import useLocalStorage from '../reactjs/local-store';
import Game from '../tictactoe/game';
import { InputValueProvider } from './context-api';
import DemoContext from './context-data';
import Enums from './enum';
import Form from './form';
import Generic from './generic';
import { InlineDocumentationTS } from './inlineDocument';
import TypeNarrow from './type-narrowing';
import TypeScript from './TypeScript';
const address = {
  stress: 'Nguyễn Trường Tộ',
  number: '28/4',
  zip: '70000',
  suite: '#577',
};

const TS: React.FC = () => {
  const [name, setName] = useLocalStorage('name', 'John');
  return (
    <div>
      <TypeScript />
      {/* <InlineDocumentationTS address={address} /> */}
      <Form />
      <InputValueProvider>
        <DemoContext />
      </InputValueProvider>
      <Enums />
      <Generic />
      <TypeNarrow />
      <ExampleUseEffect />
      <ListData />
      {/* <EffectDemo /> */}
      <ExampleCreateRef />
      {/* <Game /> */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};
export default TS;
