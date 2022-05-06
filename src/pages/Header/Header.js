
import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../Hooks/CustomLink/Custom';
import './Header.css'
import LogoHeader from './UpHeader/LogoHeader';
const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <LogoHeader></LogoHeader>
            <Navbar sticky="top" className='navigation' expand='lg'>
                <Container className='nav'>
                    <Navbar.Brand className='d-lg-none text-light' as={Link} to="/home"> <div className="logo">
                        <h1> <span className='sub-logo'>AK</span> Laptop Store.</h1>
                    </div></Navbar.Brand>
                    <Navbar.Toggle className='bg-white ' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0 "
                            navbarScroll>

                            <Nav.Link className='nav-item text-white' ><CustomLink className='nav-item text-white' to='/home'>Home</CustomLink></Nav.Link>
                            <Nav.Link className='nav-item text-white' ><CustomLink to='/about'>About</CustomLink></Nav.Link>
                            <Nav.Link className='nav-item text-white' ><CustomLink to='/blog'>Blog</CustomLink></Nav.Link>
                            {
                                user && <>
                                    <Nav.Link className='nav-item text-white' > <CustomLink to='/addItems'>Add Item</CustomLink> </Nav.Link>
                                    <Nav.Link className='nav-item text-white' > <CustomLink to='/mymanageitem'>MangeItem</CustomLink></Nav.Link>
                                    <Nav.Link className='nav-item text-white'> <CustomLink to='/myItems'> My Item</CustomLink></Nav.Link>
                                </>
                            }


                        </Nav>

                        <div className="d-flex">
                            {user ?
                                <button className='btn btn-warning px-3 py-2' onClick={logOut}> Log out</button> :
                                <Nav.Link className='nav-item text-white' as={Link} to="/login"> <CustomLink to='/login'>Login</CustomLink></Nav.Link>}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;