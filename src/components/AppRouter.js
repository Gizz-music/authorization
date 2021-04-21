import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { privatRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/const";

const AppRouter = () => {
  const user = false;
  return user ? (
    <Switch>
      {privatRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact={true} />
      )}
      <Redirect to={ CHAT_ROUTE } />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} component={Component} exact={true} />
      )}
      <Redirect to={ LOGIN_ROUTE } />
    </Switch>
  )
};

export default AppRouter;