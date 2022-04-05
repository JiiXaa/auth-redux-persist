import { Route, Navigate } from 'react-router-dom';
import { store } from '../redux/store';
import { LOGIN_PATH } from './routesPath';

export const PublicRoute = ({
  loggedInPath,
  component: Component,
  ...rest
}) => {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;

  return (
    <Route
      {...rest}
      render={() => {
        return token == null ? (
          <Component />
        ) : (
          <Navigate
            replace
            to={{
              pathname: loggedInPath,
            }}
          />
        );
      }}
    />
  );
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const state = store.getState();
  const details = state.user.details;
  let token = details?.token;

  return (
    <Route
      {...rest}
      render={() => {
        return token ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: LOGIN_PATH,
            }}
          />
        );
      }}
    />
  );
};
