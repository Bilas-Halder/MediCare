import React, { useState } from 'react';
import "../LogIn/LogIn.css";
import "./SignUp.css";

import { NavLink } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const SignUp = ({ logOutHandler, logInHandler }) => {
    const tempUser = {
        name: "",
        email: "",
        password: "",
        rpass: ""
    };

    const { signUpUsingEmail, verifyEmail } = useAuth();

    const [showing, setShowing] = useState(false);
    const isShow = () => {
        setShowing(!showing);
    }
    const signUpHandler = e => {
        const formElement = e.target.parentElement.parentElement;
        e.preventDefault();

        signUpUsingEmail(tempUser?.name, tempUser?.email, tempUser?.password, formElement);
        // sending formElement for resetting if the signUp was successFull
    }

    return (
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            <div className="form-container">
                <div className="log-in-header">SignUp Form</div>
                <form>
                    <div className="input-field">
                        <input
                            onBlur={(e) => {
                                tempUser.name = e.target.value;
                            }}
                            type="text" required />
                        <label>Full Name</label>
                    </div>
                    <div className="input-field">
                        <input
                            onBlur={(e) => {
                                tempUser.email = e.target.value;
                            }}
                            type="text" required />
                        <label>Email or Username</label>
                    </div>
                    <div className="input-field">
                        <input
                            onBlur={(e) => {
                                tempUser.password = e.target.value;
                            }}
                            className="password" type={showing ? "text" : "password"} required />
                        <span className="show">
                            <button onClick={isShow}>SHOW</button>
                        </span>
                        <label>Password</label>
                    </div>
                    <div className="input-field">
                        <input
                            onBlur={(e) => {
                                tempUser.rpass = e.target.value;
                            }}
                            className="password" type={showing ? "text" : "password"} required />
                        <span className="show">
                            <button onClick={isShow}>SHOW</button>
                        </span>
                        <label>Repeat Password</label>
                    </div>
                    <button className="primary-btn login-btn" onClick={signUpHandler} >Sign Up</button>
                </form>


                <div className="login">
                    Already Signed up ? <NavLink to="/login"> LogIn now</NavLink>
                </div>
            </div>
        </div>

    );
};

export default SignUp;