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
        </span>
      </ListGroup.Item>
    ))}
  </ListGroup>
);
  // return (
  //   <>
  //     <ListGroup>
  //       {props.list.map(item => (
  // <ListGroup.Item>Cras justo odio</ListGroup.Item>
  // <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  // <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  // <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
  // <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  //       ))}
  //     </ListGroup>
  //   </>
  //   // <ul>
  //   //   {props.list.map(item => (
  //   //     <li
  //   //       className={`complete-${item.complete.toString()}`}
  //   //       key={item._id}
  //   //     >
  //   //       <span onClick={() => props.handleComplete(item._id)}>
  //   //         {item.text}
  //   //       </span>
  //   //     </li>
  //   //   ))}
  //   // </ul>
  // );
}


// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

export default TodoList;