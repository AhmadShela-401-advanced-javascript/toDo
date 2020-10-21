import { Toast, Badge } from 'react-bootstrap';
import { If, Then, Else } from '../if';
import React, { useContext, useEffect } from 'react';
import { SiteContext } from '../../context/site';
import { PaginatedList } from 'react-paginated-list'
function TodoList(props) {

  const siteContext = useContext(SiteContext);

  function _filterFn(list) {

    let myArr = [];
    list.forEach(item => {
      if (siteContext.displayCompletedItems) { // return all items
        myArr.push(item);
      } else { // return only not completed items
        if (!item.complete) {
          myArr.push(item);
        }
      }
    });

    return myArr
  }


  return (
    <PaginatedList
      list={_filterFn(props.list)}
      itemsPerPage={siteContext.numItemsPerScreen}
      renderList={(list) => (
        <>
          {list.map((item, id) => {
            return (
              <Toast
              key={id}
                onClose={() => props.handleDelete(item._id)}
                animation={true}
                style={{ width: '15rem', marginLeft: '5rem', padding: '10px' }}
              >
                <Toast.Header>
                  <Badge pill variant={item.complete ? "danger" : "success"}
                    className="mr-2"
                    onClick={() => props.handleComplete(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {item.complete ? "Complete" : "Pendding"}
                  </Badge>
                  <h6 className="mr-auto">{item.assignee}</h6>
                </Toast.Header>
                <Toast.Body>
                  {item.text}
                  <small>{item.difficulty}</small>
                </Toast.Body>
              </Toast>
            );
          })}
        </>
      )}
    />);
}

export default TodoList;