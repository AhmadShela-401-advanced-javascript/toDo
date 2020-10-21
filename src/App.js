import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import ToDo from './components/todo/todo.js';
import { If, Then, Else } from './components/if/';
import SignUp from './components/signup'
import ToDo from './components/todo/todo-connected';
import Header from './components/header';
import useAuth from './auth/auth'
import { Button } from 'react-bootstrap';
import SiteContext from './context/site';
import CotrolePanel from './components/controlePanel'

function App(props) {
  // const toggLogingState = (loginStat) => {
  //   return loginStat == 0 ? 1 : 0
  // }
  const [loginState, setLoginState] = useState(1);

  const toggLogingState = () => {
    if (loginState == 0) {
      setLoginState(1)
    } else {
      setLoginState(0)
    }
    // this.setState({signIn : this.state.signIn == 0 ? 1 : 0})
  }
  const [handleBasicAuth, handleBearerAuth, values] = useAuth(toggLogingState);


  // useEffect(() => {    
  //   handleBearerAuth()
  // },[]);

  return (
    <BrowserRouter>
      <SiteContext>
        <Header signForm={
          <If condition={loginState == 0}>
            <Then>
              <SignUp changeSignStatus={toggLogingState} />
            </Then>
            <Else>
              <Button onClick={toggLogingState}>LogOut</Button>
            </Else>
          </If>
        } />
        <If condition={loginState == 1}>
          <Then>
            <CotrolePanel/>
            <ToDo />
          </Then>
          <Else>

          </Else>
        </If>
      </SiteContext>
    </BrowserRouter>
  );
}

export default App;
// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state ={
//       signIn:0
//     }
//   }
//   componentDidMount(){
//     const [handleBasicAuth, handleBearerAuth, values] = useAuth(()=>{this.editSignInStatus()});
//   }
//   editSignInStatus =() =>{
//     this.setState({signIn : this.state.signIn == 0 ? 1 : 0})
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <Header signForm={<SignUp changeSignStatus={this.editSignInStatus} />} />
//         <If condition={this.state.signIn == 1}>
//           <Then>
//         <ToDo />
//           </Then>
//           <Else>

//           </Else>
//         </If>
//       </BrowserRouter>
//     );
//   }
// }