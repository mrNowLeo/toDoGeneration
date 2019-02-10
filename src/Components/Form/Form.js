import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    return (
      <form className="login-form">
        <input type="text" name="login" className="input-default" placeholder="Login" />
        <input type="password" name="password" className="input-default" placeholder="Password" />
        <div className="ws-flexbox button-form">
          <button type="submit" name="Login" className="button-login">Login</button>
          <a href="/registration" className="button-register">Register</a>
        </div>
      </form>
    );
  }
}

export default Form;
