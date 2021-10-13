import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
  Chat,
  ChatList,
  MainMap,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <Switch>
          <Route path='/' component={MainMap} exact/>
          <Route path='/chatlist' component={ChatList} exact/>
          <Route path='/chat/:chatId' component={Chat} exact />
        </Switch>
    </>
  );
}

export default MainRouter;