import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { If, Then, Else } from '../if';
import useAuth from '../../auth/auth'
import base64  from 'base-64';
import utf8 from 'utf8'
// import { ListGroup } from 'react-bootstrap';

function SignUp(props) {
  const [state, setList] = useState(1);
  const [handleBasicAuth, handleBearerAuth, values] = useAuth(()=>{props.changeSignStatus(1)});
  const handleSignUpChange = () => {
    setList(2)
  }
  const handleSignInChange = () => {
    setList(1)
  }
  const handleSign_In_UP_Process = (e) =>{
    e.preventDefault();
    // var todoAPI = 'http://localhost:4000/api/v1/user/signin'
    if(state == 1){
      handleBasicAuth(document.getElementById('name').value,document.getElementById('pass').value)
    //   var input = `${document.getElementById('name').value}:${document.getElementById('pass').value}`;
    //   var encodedData = base64.encode(input);
    //   encodedData = `Basic ${encodedData}`
    //   console.log(`${encodedData} ==> ${input}`);
    //   // var encoded = 'Zm9vIMKpIGJhciDwnYyGIGJheg==';
    //   // var bytes = base64.decode(encoded);
    //   // var text = utf8.decode(bytes);
    //   // item.due = new Date();
    //   fetch(todoAPI, {
    //     method: 'post',
    //     mode: 'cors',
    //     cache: 'no-cache',
    //     headers: { 'Authorization': encodedData },
    //     body: JSON.stringify({
    //       name:document.getElementById('name').value,
    //       pass:document.getElementById('pass').value
    //     })
    //   })
    //     .then(response => {
    //       console.log(response);
    //       response.json()
    //       if(response.status == 200){
            
    //       }
    //     })
    //     .then(savedItem => {
    //       // setList([...list, savedItem])
    //       props.changeSignStatus(1)
    //     })
    //     .catch(console.error);
    }else{

    }
  }

  return (
    <>
      {/* <Card style={{ width: '24rem', height: '25rem', padding: '10px' }}> */}
        {/* <If condition={state == 1}>
          <Then>
            <h3>sign In</h3>
          </Then>
          <Else>
            <h3>sign Up</h3>
          </Else>
        </If> */}
        <Form onSubmit={handleSign_In_UP_Process} style={{ margin: '20px' ,display:'flex'}}>
          {/* <Form.Label>
            <span>username</span> */}
            <Form.Control
            id='name'
              name="text"
              placeholder="Add To Do List Item"
            />
          {/* </Form.Label> */}
          {/* <Form.Label>
            <span>password</span> */}
            <Form.Control
            id='pass'
              name="pass"
              placeholder="Add To Do List Item"
            />
          {/* </Form.Label> */}
          <If condition={state == 1}>
            <Then>
              <Button type="submit" variant="primary">sign in</Button>{' '}
              <Button onClick={handleSignUpChange} variant="primary">sign up</Button>{' '}
            </Then>
            <Else>
            <Button type="submit" variant="primary">Register</Button>{' '}
              <Button onClick={handleSignInChange} variant="primary">back</Button>{' '}
            </Else>
          </If>
        </Form>
      {/* </Card> */}
    </>
  );
}

export default SignUp;