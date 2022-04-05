import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Home from './pages/Home';
import { connect } from 'react-redux';
import { PrivateRoute, PublicRoute } from './routes/routesCheck';
import { HOME_PATH, LOGIN_PATH } from './routes/routesPath';

function App({ user }) {
  return (
    <Routes>
      <PublicRoute
        path={LOGIN_PATH}
        element={<Login />}
        loggedInPath={HOME_PATH}
      />
      <PrivateRoute path={HOME_PATH} element={<Home />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(App);
