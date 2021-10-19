import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import './Login.css';
import google from '../../images/google.png';
import useAuth from "../../hooks/useAuth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, getAuth } from "@firebase/auth";

const Login = () => {
    const { isLoading, setIsLoading, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password);
        }

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                history.push('/home');
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    }

    return (
        <div className="d-flex align-items-center justify-content-center my-5 login-section login-box">
            <div className="front-bg px-5">
                <h2 className="fw-bold">Please {isLogin ? 'Login' : 'Register'}</h2>
                <form onSubmit={handleRegistration}>

                    {!isLogin && <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>}
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your Email" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Pass:&emsp;&emsp;&emsp;&emsp;&emsp;</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" placeholder="Password" required />
                        </div>
                    </div>
                    <div className="mb-3 text-danger">{error}</div>
                    <div className="row mb-3">
                        <div className="col-sm-8 ">
                            <div className="form-check">
                                <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                <label className="form-check-label" htmlFor="gridCheck1">
                                    Already Registered?
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-3">
                        <button type="submit" className="btn">
                            {isLogin ? 'Login' : 'Register'}
                        </button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <button type="button" onClick={handleResetPassword} className="btn">Reset Password</button>
                    </div>

                </form>
                <div className="text-center">---------------or---------------</div>
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <button
                        className="btn"
                        onClick={handleGoogleLogin}
                    >
                        <img width="20" src={google} alt="..." />&emsp;Google Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;