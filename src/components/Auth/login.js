import React from 'react';
import { LoginContext } from '../../context/authContext';

const If = props => {
  return props.condition ? props.children : null;
};

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '',signState:'in' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };
  handleSubmitSignUp = e => {
    e.preventDefault();
    this.context.logUp(this.state.username, this.state.password);
  };
  toggleSignState = e =>{
    if(this.state.signState == 'up'){
      this.setState({signState:'in'})
    }else{
      this.setState({signState:'up'})
    }
  }

  handleSubmitLogOut = e => {
    e.preventDefault();
    this.context.logout()
    this.setState({signState:'in'});
  };

  render() {

    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.handleSubmitLogOut}>Log Out</button>
        </If>

        <If condition={!this.context.loggedIn && this.state.signState == 'in'}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>Login</button>
          </form>
            <button onClick={this.toggleSignState}>LogUp</button>
        </If>
        <If condition={!this.context.loggedIn && this.state.signState == 'up'}>
          <form onSubmit={this.handleSubmitSignUp}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button>Register</button>
          </form>
            <button onClick={this.toggleSignState}>signIn</button>
        </If>
      </>
    );

    // return (
    //   <>
    //     <If condition={this.context.loggedIn}>
    //       <button onClick={this.context.logout}>Log Out</button>
    //     </If>

    //     <If condition={!this.context.loggedIn}>
    //       <form onSubmit={this.handleSubmit}>
    //         <input
    //           placeholder="UserName"
    //           name="username"
    //           onChange={this.handleChange}
    //         />
    //         <input
    //           placeholder="password"
    //           name="password"
    //           onChange={this.handleChange}
    //         />
    //         <button>Login</button>
    //       </form>
    //     </If>
    //   </>
    // );
  }
}

export default Login;