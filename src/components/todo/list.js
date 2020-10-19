import React from 'react';
import { ListGroup } from 'react-bootstrap';

function TodoList(props) {

return (
  <ListGroup className='ListGroup' variant="flush">
    {props.list.map(item => (
      <ListGroup.Item className={`listGroupItem complete-${item.complete.toString()}`}
        key={item._id} >
        <span onClick={() => props.handleComplete(item._id)}>
        {item.text} 
        {item.complete} 
        {item.difficulty} 
        {item.assignee} 
        </span>
      </ListGroup.Item>
    ))}
  </ListGroup>
);
}

export default TodoList;