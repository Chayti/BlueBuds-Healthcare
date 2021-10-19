import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

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

            <nav className="navbar py-1 mt-3">
                <NavLink to="/home" activeStyle={style} className="link">HOME</NavLink>
                <NavLink to="/healthCheck" activeStyle={style} className="link">Health Check</NavLink>
                <NavLink to="/membership" activeStyle={style} className="link">Membership</NavLink>
                {
                    user.email ?
                        <span className="mx-3 my-0  text-light">Hello, {user.displayName}</span>
                        : <p></p>
                }
                {
                    user.email ?
                        <img width="30" style={{ borderRadius: "50%" }} src={user.photoURL} />
                        : <p></p>
                }
                {
                    user.email ? <button onClick={logOut} className="btn"><FontAwesomeIcon icon={faSignInAlt} size="1x" />&nbsp;Log out</button>
                        : <NavLink to="/login" activeStyle={style} className="link"><FontAwesomeIcon icon={faSignInAlt} size="1x" />&nbsp;Login</NavLink>
                }
            </nav>

        </div>
    );
}

export default Header;