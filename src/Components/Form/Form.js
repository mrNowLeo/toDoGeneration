import React, {Component} from 'react';
import './Form.css';
import RandomPhrase from '../RandomPhrase/RandomPhraze';

class Form extends Component {
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
          <input type="text" name="login" className="Form_input-default" placeholder="Login" />
          <input type="password" name="password" className="Form_input-default" placeholder="Password" />
          <div className="ws-flexbox Form_button-form">
            <button type="submit" name="Login" className="Form_button-login">Login</button>
            <a href="/reg" className="Form_button-register">Register</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
