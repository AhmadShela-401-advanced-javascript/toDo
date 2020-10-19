import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      React Bootstrap
    </Navbar.Brand>
    <div>
        {props.signForm}
    </div>
            </Navbar>
        </>
    )

}

export default Header;