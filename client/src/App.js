import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Report from './components/Report/Report';
import Login from './components/Login/Login';
import ReportBox from './components/ReportBox/ReportBox';
import Reports from './components/Reports/Reports';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import Logout from './components/Logout/Logout';
import { loadUser } from './actions/auth';

//Redux
import { Provider } from 'react-redux';
import store from './store';

if (localStorage.getItem('token')){
  setAuthToken(localStorage.getItem('token'));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return <Provider store={store}>
    <Router>
      <div className="App">
          <Route component={Header} />
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/report" component={Report} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/reports" component={Reports} />
            <PrivateRoute exact path="/logout" component={Logout} />
          </Switch>
      </div>
    </Router>
  </Provider>;
}

export default App;
