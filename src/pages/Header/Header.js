
import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../Hooks/CustomLink/Custom';
import './Header.css'
import LogoHeader from './UpHeader/LogoHeader';
const Header = () => {
    return (
        <div>
            <LogoHeader></LogoHeader>
            <Navbar className='navigation' expand='lg'>
                <Container >
                    <Navbar.Brand className='d-lg-none text-light' as={Link} to="/">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle className=' bg-white' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}
                            navbarScroll>

                            <Nav.Link className='nav-item text-white' as={Link} to='/home'><CustomLink className='nav-item text-white' to='/home'>Home</CustomLink></Nav.Link>
                            <Nav.Link className='nav-item text-white' as={Link} to="/about"><CustomLink to='/about'>About</CustomLink></Nav.Link>
                            <Nav.Link className='nav-item text-white' as={Link} to="/blog"><CustomLink to='/blog'>Blog</CustomLink></Nav.Link>
                            <Nav.Link className='nav-item text-white' as={Link} to="/manageItems"> <CustomLink to='/manageItems'>ManageItem</CustomLink></Nav.Link>
                            <Nav.Link className='nav-item text-white' as={Link} to="/addItems"> <CustomLink to='/addItems'>Add Item</CustomLink> </Nav.Link>
                            <Nav.Link className='nav-item text-white' as={Link} to="/myItems"> <CustomLink to='/myItems'>My Item</CustomLink></Nav.Link>


                        </Nav>

                        <div className="d-flex">
                            <Nav.Link className='nav-item text-white' as={Link} to="/login"> <CustomLink to='/login'>Login</CustomLink></Nav.Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;