import React, { useState } from 'react';
import "../LogIn/LogIn.css";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const SignUp = () => {


    const { user, setUser, signUpUsingEmail, verifyEmail, updateName, setLogged } = useAuth();


    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from;


    const [showing, setShowing] = useState(false);
    const isShow = () => {
        setShowing(!showing);
    }
    const signUpHandler = e => {
        e.preventDefault();
        const formElement = e.target.parentElement;
        const name = formElement.children[0].children[0].value;
        const email = formElement.children[1].children[0].value;
        const password = formElement.children[2].children[0].value;
        const rpassword = formElement.children[3].children[0].value;



        signUpUsingEmail(email, password)
            .then((userCredential) => {
                updateName(name).then(() => {
                    setUser(userCredential.user);
                    setLogged(true);
                    history.push(path);
                    formElement.reset();
                });
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            <div className="form-container">
                <div className="log-in-header">SignUp Form</div>
                <form>
                    <div className="input-field">
                        <input type="text" required />
                        <label>Full Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" required />
                        <label>Email or Username</label>
                    </div>
                    <div className="input-field">
                        <input className="password" type={showing ? "text" : "password"} required />
                        <span className="show">
                            <button onClick={isShow}>SHOW</button>
                        </span>
                        <label>Password</label>
                    </div>
                    <div className="input-field">
                        <input className="password" type={showing ? "text" : "password"} required />
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