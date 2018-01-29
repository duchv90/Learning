import React from 'react';
import LoginForm from './LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
