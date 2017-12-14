import React from 'react';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
  render() {
    return (
      <div className="register-page">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
