import React from 'react';
import cookie from 'react-cookies';
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
const API = process.env.REACT_APP_API || 'https://todoapi-ahmad.herokuapp.com/api/v1/user';
// const API = process.env.REACT_APP_API;

const testLogins = {
  testAdmin: process.env.REACT_APP_ADMIN_TOKEN || '',
  testEditor: process.env.REACT_APP_EDITOR_TOKEN || '',
  testUser: process.env.REACT_APP_USER_TOKEN || '',
};

export const LoginContext = React.createContext();

class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      login: this.login,
      logout: this.logout,
      user: {},
    };
  }

  login = (username, password) => {
    // This is foul and unsafe ... but when working offline / testmode ess oh kay
    console.log(testLogins[username]);
    if (testLogins[username]) {
      this.validateToken(testLogins[username]);
    }
    else {
      var input = `${username}:${password}`;
      var encodedData = base64.encode(input);
      encodedData = `Basic ${encodedData}`
      console.log(`${encodedData} ==> ${input}`);
      fetch(`${API}/signin`, {
        method: 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Authorization': encodedData },
      })
      .then(response => response.json())
      .then(data => this.validateToken(data.token))
        // .then(token => this.validateToken(token))
        .catch(console.error);
    }
  }

  validateToken = token => {
    try {
      console.log('Token',process.env.REACT_APP_SECRET);
      let user = jwt.verify(token, process.env.REACT_APP_SECRET);
      console.log('all good');
      this.setLoginState(true, token, user);
    }
    catch (e) {
      this.setLoginState(false, null, {});
      console.log('Token Validation Error', e);
    }

  };

  logout = () => {
    this.setLoginState(false, null, {});
  };

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    this.setState({ token, loggedIn, user });
  };

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export default LoginProvider;