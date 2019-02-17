import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  render() {
    if (this.props.type === 'reg') {
      return (
        <form className="reg-form">
          <input type="text" name="name" className="input-default" placeholder="Name" />
          <input type="text" name="login" className="input-default" placeholder="Login" />
          <input type="email" name="email" className="input-default" placeholder="E-Mail" />
          <input type="password" name="password" className="input-default" placeholder="Password" />
          <div className="ws-flexbox button-form">
            <button type="submit" name="continue" className="button-login">Continue</button>
            <a href="/" className="button-register">Login</a>
          </div>
        </form>
      );
    }
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
