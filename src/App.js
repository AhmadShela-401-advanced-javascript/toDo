import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import ToDo from './components/todo/todo.js';
import { If, Then, Else } from './components/if/';
import SignUp from './components/signup'
import ToDo from './components/todo/todo-connected';
import Header from './components/header';
import useAuth from './auth/auth'
import { Button } from 'react-bootstrap';
import SiteContext from './context/site';
import LoginContext from './context/authContext'
import CotrolePanel from './components/controlePanel'
import Login from './components/Auth/login'
import Auth from './components/Auth/auth'

class App extends React.Component {
static contextType = LoginContext;
  render() {
    return (
      <SiteContext>
      <LoginContext>
        
        <Login />
        <hr />
        <Auth condition={this.context.loggedIn}>
        <CotrolePanel/>
        <ToDo/>
        </Auth>
      </LoginContext>
      </SiteContext>
    );
  }
}

export default App;


// function App(props) {
// // const loginContext = useContext(LoginProvider);
// const siteContext = useContext(SiteContext);

//   return(
//     <SiteContext>
//       {/* <LoginProvider> */}
//         <Header/>
//       <Login/>
//       <Auth condition={siteContext.displayCompletedItems}>
//     <ToDo />
//       </Auth>
//       {/* </LoginProvider> */}
// </SiteContext>
//   );

//   // npm i jsonwebtoken
//   // const [loginState, setLoginState] = useState(0);

//   // const toggLogingState = () => {
//   //   if (loginState == 0) {
//   //     setLoginState(1)
//   //   } else {
//   //     setLoginState(0)
//   //   }
//   // }
//   // const [handleBasicAuth, handleBearerAuth, values] = useAuth(toggLogingState);


//   // useEffect(() => {    
//   //   handleBearerAuth()
//   // },[]);

//   // return (
//   //   <BrowserRouter>
//   //     <SiteContext>
//   //       <Header signForm={
//   //         <If condition={loginState == 0}>
//   //           <Then>
//   //             <SignUp changeSignStatus={toggLogingState} />
//   //           </Then>
//   //           <Else>
//   //             <Button onClick={toggLogingState}>LogOut</Button>
//   //           </Else>
//   //         </If>
//   //       } />
//   //       <If condition={loginState == 1}>
//   //         <Then>
//   //           <CotrolePanel/>
//   //           <ToDo />
//   //         </Then>
//   //         <Else>

//   //         </Else>
//   //       </If>
//   //     </SiteContext>
//   //   </BrowserRouter>
//   // );
// }

// export default App;