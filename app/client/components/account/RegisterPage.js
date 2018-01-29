import React from 'react';
import RegisterForm from './RegisterForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userRegisterRequest } from '../../actions/registerActions';
import { addFlashMessages } from '../../actions/flashMessages';

class Register extends React.Component {
  render() {

    const { userRegisterRequest, addFlashMessages } = this.props;

    return (
      <div className="register-page">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <RegisterForm userRegisterRequest={userRegisterRequest} addFlashMessages={addFlashMessages} />
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
}

export default connect(null , { userRegisterRequest, addFlashMessages })(Register);
