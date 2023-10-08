import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom';

const NavBarMenu = () => {
    return(
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Products</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <NavLink className='show-products-nav' to="/">Products</NavLink>
                    <NavLink className='add-product-nav' to="/addProduct">Add Products</NavLink>
                </Nav>
            </Container>
            </Navbar>
        </div>
    );
};

export default NavBarMenu;