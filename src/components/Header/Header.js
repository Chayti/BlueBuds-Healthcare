import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    const style = {
        fontWeight: "bold",
        color: "#00b9d1"
    };
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
            </nav>

        </div>
    );
}

export default Header;