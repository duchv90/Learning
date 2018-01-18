import React from 'react';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../actions/registerActions'

class Register extends React.Component {
  render() {

    const { userRegisterRequest } = this.props;

    return (
      <div className="register-page">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <RegisterForm userRegisterRequest={userRegisterRequest} />
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired
}

export default connect(null , { userRegisterRequest })(Register);
