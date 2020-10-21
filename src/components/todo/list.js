import { Form, Button, Card, Dropdown, ListGroup } from 'react-bootstrap';
import { If, Then, Else } from '../if';
import React, { useContext } from 'react';
import { SiteContext } from '../../context/site';

function TodoList(props) {

    const siteContext = useContext(SiteContext);

    function testConsoleLog() {
      console.log('=====================??????');
    }

    return (
  <If condition={siteContext.displayCompletedItems == true}>
    <Then>
    <ListGroup className='ListGroup' variant="flush">
    {props.list.map((item,idx)=>(
        <ListGroup.Item className={`listGroupItem complete-${item.complete.toString()}`}
        key={idx} >
        <span onClick={() => props.handleComplete(item._id)}>
        {item.text} 
        {item.complete} 
        {item.difficulty} 
        {item.assignee} 
        </span>
      </ListGroup.Item>
    ))}
  </ListGroup>
    </Then>
    <Else>
  <ListGroup className='ListGroup' variant="flush">
    {props.list.filter((item) => (
      item.complete==false)).map((item,idx)=>(
        <ListGroup.Item className={`listGroupItem complete-${item.complete.toString()}`}
        key={idx} >
        <span onClick={() => props.handleComplete(item._id)}>
        {item.text} 
        {item.complete} 
        {item.difficulty} 
        {item.assignee} 
        </span>
      </ListGroup.Item>
    ))}
  </ListGroup>
    </Else>
  </If>
);
}

export default TodoList;