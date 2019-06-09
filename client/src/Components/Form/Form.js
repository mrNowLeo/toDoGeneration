import React, {Component} from 'react';
import axios from 'axios';
import './Form.css';
import RandomPhrase from '../RandomPhrase/RandomPhraze';

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.signIn = this.signIn.bind(this);
    this.state = {
      login: '',
      password: '',
      errorMessage: ''
    };
  }

  handleLoginChange(e) {
    this.setState({login: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }
  
  signIn() {
    const self = this;
    axios.post('http://localhost:3001/signin', {
      login: this.state.login,
      password: this.state.password
    })
    .then(function (response) {
      if(response.data === 'success') {
        window.location.assign('http://localhost:3000/day');
      } else {
        self.setState({errorMessage: 'Не правильный логин или пароль'})
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    if (this.props.type === 'reg') {
      return (
        <div className="Form_background">
          <RandomPhrase/>
          <form className="Form_reg-form">
            <input type="text" name="name" className="Form_input-default" placeholder="Name" />
            <input type="text" name="login" className="Form_input-default" placeholder="Login" />
            <input type="email" name="email" className="Form_input-default" placeholder="E-Mail" />
            <input type="password" name="password" className="Form_input-default" placeholder="Password" />
            <div className="ws-flexbox Form_button-form">
              <button type="submit" name="continue" className="Form_button-login">Continue</button>
              <a href="/login" className="Form_button-register">Login</a>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div className="Form_background">
        <RandomPhrase/>
        <form className="Form_login-form">
          <input type="text" onChange={this.handleLoginChange} className="Form_input-default" placeholder="Login" />
          <input type="password" onChange={this.handlePasswordChange} className="Form_input-default" placeholder="Password" />
          <div className="Form_error-message" name="error">{this.state.errorMessage}</div>
          <div className="ws-flexbox Form_button-form">
            <button type="button" onClick={this.signIn} className="Form_button-login">Login</button>
            <a href="/reg" className="Form_button-register">Register</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
