import React from "react";
import './Footer.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center py-3" style={{ backgroundColor: "#810054" }}>
                <div><img src={logo} style={{ height: "80px" }} alt="" /></div>
                <h4 className="pt-3">Contact Us</h4>
                <div className="d-flex justify-content-center">
                    <h5 style={{ color: "#00b9d1" }}>+8801521999999,&nbsp;</h5>
                    <h5 style={{ color: "#00b9d1" }}>+8801721888888</h5>
                </div>
                <small style={{ color: "white" }}>24/7 (Anytime, Anywhere)</small>
                <p style={{ color: "white" }}><FontAwesomeIcon icon={faEnvelope} size="1x" /> <span style={{ cursor: "pointer" }}>info@blueBuds.com</span></p>
            </div>

            <div className="text-center" style={{ height: "30px", color: "#494949", backgroundColor: "#202020" }}>
                <small>© Copyright 2019-2021 | BlueBuds Health</small>
            </div>

        </div>
    );
}

export default Footer;