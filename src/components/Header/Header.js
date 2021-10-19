import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const style = {
        fontWeight: "bold",
        color: "#00b9d1"
    }
    const { user, logOut } = useAuth();
    return (
        <div className="pt-4 rounded header">

            <div className="d-flex justify-content-start">
                <img className="logo" src={logo} alt="" />
                <div style={{ lineHeight: '8px' }} className="title ms-2">
                    <h4 className="fw-bold">BlueBuds Health</h4>
                    <p>healthcare - anywhere, anytime</p>
                </div>
            </div>

            <Navbar className="py-1 mt-3" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav.Link as={Link} to="/home" activeStyle={style} className="link">HOME</Nav.Link>
                        <Nav.Link as={Link} to="/healthCheck" activeStyle={style} className="link">HEALTH CHECK</Nav.Link>
                        <Nav.Link as={Link} to="/membership" activeStyle={style} className="link">MEMBERSHIP</Nav.Link>
                        {
                            user.email ?
                                <span className="mx-4 px-1 my-0  text-light">Hello, {user.displayName}</span>
                                : <p></p>
                        }
                        {
                            user.email ?
                                <img width="30" style={{ borderRadius: "50%" }} src={user.photoURL} />
                                : <p></p>
                        }
                        {
                            user.email ? <button onClick={logOut} className="btn"><FontAwesomeIcon icon={faSignOutAlt} size="1x" />&nbsp;Log out</button>
                                : <NavLink to="/login" activeStyle={style} className="link"><FontAwesomeIcon icon={faSignInAlt} size="1x" />&nbsp;Login</NavLink>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;