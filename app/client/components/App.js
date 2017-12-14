import React from 'react';
import Greetings from './Greetings';

class AppTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    this.state.name = value;
    this.setState();
  }
  handleSubmit(event) {
    console.log(this.state.name);
    event.preventDefault();
  }

  render() {
    return (<div>
      <form >
        <input type="text" onChange={this.handleChange}/>
        <input type="button" value="HienThi" onClick={this.handleSubmit}></input>
        <p>This is state: {this.state.name}</p>
      </form>
    </div>);
  }
}

class App extends React.Component {
  render() {
    return (<div>
      <AppTest name="React width ES6">Children props</AppTest>
    </div>);
  }
}

export default App;
