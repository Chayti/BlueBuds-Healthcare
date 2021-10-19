import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import google from '../../images/google.png';
import useAuth from "../../hooks/useAuth";
// import MenuIcon from '@material-ui/icons/Menu';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="d-flex align-items-center justify-content-center my-5">
            <div>
                <h2 className="fw-bold text-primary">Login</h2>
                <form onSubmit="">
                    <input className="mb-2 ps-1" type="email" name="" id="" placeholder="Your Email"></input>
                    <br />
                    <input className="mb-2 ps-1" type="password" name="" id=""></input>
                    <br />
                    <input className="btn ms-0" type="submit" value="Submit"></input>
                </form>
                <p>New to BlueBuds? <Link to="/register">Create Account</Link></p>
                <div className="text-center">---------------or---------------</div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <button
                        className="btn"
                        onClick={signInUsingGoogle}
                    >
                        <img width="20" src={google} alt="..." />&emsp;Google Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;