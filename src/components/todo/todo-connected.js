import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import useAjax from '../../hooks/useAjax';


import './todo.scss';

const todoAPI = 'https://todoapi-ahmad.herokuapp.com/api/v1/todoItem';
// const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [list, setList] = useState([]);

  const [axiosApiInstance] = useAjax();

  const _addItem = (item) => {
    item.due = new Date();
    item.complete = false;
    axiosApiInstance(
      todoAPI,
      'post',
      item
    ).then(({ data: savedItem }) => {
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _getTodoItems = () => {
    axiosApiInstance(
      todoAPI,
      'get'
    ).then(( data ) => {
      console.log('the database data = > ',data.data.results);
        setList(data.data.results)
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {

      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;
      axiosApiInstance(
        url,
        'put',
        item
      ).then(() => {
        setList(list.map(listItem => listItem._id === item._id ? item : listItem));
        })
        .catch(console.error);
    }
  };

  const _deleteItem = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      let url = `${todoAPI}/${id}`;

      axiosApiInstance(url, "delete")
        .then(() => {
          setList(list.filter(listItem => listItem._id !== item._id));
        })
        .catch(console.error);
    }
  };

  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            handleDelete={_deleteItem}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;