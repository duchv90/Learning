import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import App from './components/App';
import Greetings from './components/Greetings';
import LoginPage from './components/account/LoginPage.js';
import RegisterPage from './components/account/RegisterPage.js';

class Routers extends React.Component {
  render() {
    return (
      <div className="page-container">
        <Router>
          <App>
            <div className="page-content">
              <Route exact path="/" component={Greetings}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/register" component={RegisterPage}/>
            </div>
          </App>
        </Router>
      </div>
    );
  }
}

export default Routers;
