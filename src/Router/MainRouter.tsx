import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { 
  MainMap,
 } from '../components';

const MainRouter = () => {
  const location = useLocation();

  return (
    <>
        <Switch>
          <Route path='/' component={MainMap} exact/>
        </Switch>
    </>
  );
}

export default MainRouter;