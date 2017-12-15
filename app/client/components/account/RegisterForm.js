import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordComfirmation: '',
      timezone: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.userRegisterRequest(this.state);
  }

  render() {
    const options = map(timezones, (val, key) => (
      <option key={val} value={val}>{key}</option>
    ));
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Create Account</h1>
        <div className="form-group">
          <label className="d-none">Username</label>
          <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="d-none">Email</label>
          <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="d-none">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="d-none">Retype Password</label>
          <input type="password" name="passwordComfirmation" className="form-control" placeholder="Retype Password" onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <label className="d-none">Retype Password</label>
          <select className="form-control" name="timezone" onChange={this.handleChange} value={this.state.timezone}>
            <option value="" disabled>Choose Your Timezone</option>
            {options}
          </select>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired
}

export default RegisterForm;
