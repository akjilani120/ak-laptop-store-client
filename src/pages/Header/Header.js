
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import LogoHeader from './UpHeader/LogoHeader';
const Header = () => {
    return (
        <div>
            <LogoHeader></LogoHeader>
            <Navbar className='navigation'>
                <Container >
                    <Navbar.Brand as={Link} to="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/manageItems">ManageItem</Nav.Link>
                            <Nav.Link as={Link} to="/addItems">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="/myItems">My Item</Nav.Link>

                           
                        </Nav>
                        <div className="d-flex">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;