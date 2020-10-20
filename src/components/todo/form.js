import React, { useState } from 'react';
import {  Form ,Button, Card } from 'react-bootstrap';
import useForm from '../../hooks/useForm';


function TodoForm(props) {
  const [item,setItem] = useState();
  const [handleSubmit, handleChange, values] = useForm(setItemFun)


  function setItemFun(item) {
    props.handleSubmit(item)
    setItem({item});
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   e.target.reset();
  //   console.log(item);
  //   props.handleSubmit(item);
  //   // const item = {};
  //   setItem({item});
  // };

  // const  handleChange = e => {
  //   setItem({...item, [e.target.name]: e.target.value });
  // };

  return (
    <>
    <Card style={{ width: '24rem', height: '25rem' ,padding: '10px' }}>
      <h3>Add Item</h3>
      <Form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <Form.Label>
          <span>To Do Item</span>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleChange} />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
        </Form.Label>
        <Button type="submit" variant="primary">Add Item</Button>{' '}
        {/* <button></button> */}
      </Form>
    </Card>
    </>
  );
  
}

export default TodoForm;

// import React, {useState} from 'react';
// import useForm from '../../hooks/useForm';
// function Food(props) {
//     // values state
//     const [formData, setFormData] = useState({});
//     const [handleSubmit, handleChange, values] = useForm(eat);
//     function eat(food) { //  JS hoisting 
//         console.log("fooood @@@@@@@@ ", food);
//         setFormData(food);
//     }
//     return (
//         <div>
//             <h2>Food</h2>
//             <form onSubmit={handleSubmit}>
//                 <input name="food" type="text" placeholder="Food name" onChange={handleChange} />
//                 <input name="type" type="text" placeholder="Type" onChange={handleChange}/>
//                 <input name="price" type="number" placeholder="Price" onChange={handleChange}/>
//                 <input name="calories" type="number" placeholder="Calories" onChange={handleChange}/>
//                 <button>Eat</button>
//             </form>
//             <strong>Form Food Values: </strong>
//             {
//                 Object.keys(formData).map((key, idx)=> <div key={idx}> {key} - {formData[key]}</div>)
//             }
//         </div>
//     )
// }
// export default Food;