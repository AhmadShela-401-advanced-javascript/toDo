// import React, { useEffect, useState,useContext } from 'react';
import { Form, Button, Card, Dropdown } from 'react-bootstrap';
import { If, Then, Else } from '../if';
import useAuth from '../../auth/auth'
import base64 from 'base-64';
import utf8 from 'utf8'
import React, { useContext } from 'react';

import { SiteContext } from '../../context/site';

function CotrolePanel(props) {

    const siteContext = useContext(SiteContext);

    function toggleComplete(e) {
        // console.log(e.target.textContent);
        siteContext.setdisplayCompletedItems(!siteContext.displayCompletedItems);
        e.target.textContent = siteContext.displayCompletedItems?'Show completed items':'hide completed items'
    }
    function toggleScreenChangeValue(e) {
        siteContext.setnumItemsPerScreen(e.target.value);
    }
    function toggleSortChangeValue(e) {
        siteContext.setdefualtSortField(e.target.value);
    }

    return (

        <Card style={{ padding: '10px',display: 'flex' ,flexDirection:'row'}}>
            <Button onClick={toggleComplete} variant="primary">Show completed items</Button>
            
                <select onChange={toggleScreenChangeValue} className="dropdownmenu" id="dropdownmenu" name="dropdownmenu">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>                    
                </select>
                <select onChange={toggleSortChangeValue} className="dropdownmenu" id="dropdownmenu" name="dropdownmenu">
                    <option value="text">text</option>
                    <option value="assignee">assignee</option>
                    <option value="deficulty">deficulty</option>                    
                </select>
            
            {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={toggleChangeValue(5)} value="5" href="#/action-1">5</Dropdown.Item>
                    <Dropdown.Item onClick={toggleChangeValue(10)} href="#/action-2">10</Dropdown.Item>
                    <Dropdown.Item onClick={toggleChangeValue(15)} href="#/action-3">15</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Default sort field
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item value="5" href="#/action-1">name</Dropdown.Item>
                    <Dropdown.Item value="5" href="#/action-2">assignee</Dropdown.Item>
                    <Dropdown.Item value="5" href="#/action-3">deficulty</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> */}
        </Card>
    )
}

export default CotrolePanel;