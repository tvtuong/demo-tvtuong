import React from 'react';
import BaseBadge from './bootStrap/components/badge';
import BaseBreadCrumb from './bootStrap/components/breadcrumb';
import BaseCard from './bootStrap/components/card';
import BaseNotification from './bootStrap/components/notification';
// import TicTacToe from "./tictactoe/index"
const App: React.FC = () => {
  return (
    <div className="App">
      <BaseBreadCrumb tab="Home" tab2="Detail" />
      <BaseNotification title="Xin Chào" text="Bạn có thấy thông báo này không ?" />
      <BaseBadge title="Message" value={200} isIcon />
      <BaseCard />
    </div>
  );
};

export default App;
