import React from 'react';
import { withRouter } from 'react-router-dom';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/register';
import TextFieldGroup from '../common/TextFieldGroup';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordComfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userRegisterRequest(this.state).then(
        ( data ) => {
          this.props.addFlashMessages({
            type: 'success',
            text: 'You signed up successfully. Welcome!'
          });
          this.props.history.push('/');
        },
        ( err ) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    const options = map(timezones, (val, key) => (
      <option key={val} value={val}>{key}</option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Account</h1>
        <TextFieldGroup 
          field="username" 
          value={this.state.username} 
          label="Username" 
          error={errors.username} 
          onChange={this.handleChange} 
        />
        <TextFieldGroup 
          field="email" 
          value={this.state.email} 
          type="email" 
          label="Email" 
          error={errors.email} 
          onChange={this.handleChange} 
        />
        <TextFieldGroup 
          field="password" 
          value={this.state.password} 
          type="password" 
          label="Password" 
          error={errors.password} 
          onChange={this.handleChange} 
        />
        <TextFieldGroup 
          field="passwordComfirmation" 
          value={this.state.passwordComfirmation} 
          type="password" 
          label="Retype Password" 
          error={errors.passwordComfirmation} 
          onChange={this.handleChange} 
        />

        <div className="form-group">
          <label className="control-label">Timezone</label>
          <select 
            className={classnames("form-control", { 'is-invalid': errors.timezone })} 
            name="timezone" 
            onChange={this.handleChange} 
            value={this.state.timezone}
          >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
          {errors.timezone && <div className="invalid-feedback">{errors.timezone}</div>}
        </div>
        <input disabled={this.state.isLoading} className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
  addFlashMessages: PropTypes.func.isRequired
}

export default withRouter(RegisterForm);
