import React from 'react';
import cookie from 'react-cookies';
import Cookies from 'react-cookie'
import base64 from 'base-64';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
import axios from "axios";
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
      logUp: this.logUp,
      user: {},
    };
  }
  axiosApiInstance = (url, method, body) => {
    return axios({
      url: url,
      method: method,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: body
    })
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

  logUp = (username, password) => {
    console.log('Starting logging up .... ');
    // This is foul and unsafe ... but when working offline / testmode ess oh kay
    if (testLogins[username]) {
      this.validateToken(testLogins[username]);
    }
    else {
      let body = {name: username, pass: password, role: "ADMIN"}
        this.axiosApiInstance(`${API}/signup`,'post',body)
        .then(response => this.validateToken(response.data))
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

  componentDidMount() {
    // get the cookie -> validate cookie -> of valid -> update the state 
    const cookieToken = cookie.load('auth');
    console.log('--->componentDidMount',cookieToken);
    const token = cookieToken || null;
    this.validateToken(token);
  }

  logout = () => {
    this.setLoginState(false, null, {});
  };

  setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token,{ maxAge: 86400 });
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