import React, { useState } from 'react';
import "../LogIn/LogIn.css";
import "./SignUp.css";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { validEmail, validPassword } from '../LogIn/LogIn';
import { useErrorIcon } from '../../hooks/useicons/useIcons';

const SignUp = () => {


    const { user, setUser, signUpUsingEmail, verifyEmail, updateName, setLogged } = useAuth();


    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from;


    const [showing, setShowing] = useState(false);
    const isShow = (e) => {
        e.preventDefault();
        setShowing(!showing);
    }


    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(0);

    const errorIcon = useErrorIcon();
    const errMsgStyle = {
        textAlign: "left",
        marginTop: "-18px",
        marginBottom: "18px",
        fontSize: "0.9rem",
        color: "#d70000"
    };

    const signUpHandler = e => {
        e.preventDefault();
        const formElement = e.target.parentElement;
        const name = formElement.children[0].children[0].value;
        const email = formElement.children[1].children[0].value;
        const password = formElement.children[2].children[0].value;
        const rpassword = formElement.children[3].children[0].value;



        if (!validEmail.test(email)) {
            setEmailErr(true);
            setPassErr(0);
            console.log("procced 1");
            return;
        }
        else {
            if (!validPassword.test(password)) {
                setEmailErr(false);
                setPassErr(1);
                console.log("procced 2");
                return;
            }
            else {
                setEmailErr(false);
                if (password === rpassword && password.length >= 6) {
                    console.log("procced 44", password.length);
                    setPassErr(0);
                }
                else {
                    setPassErr(2);
                    console.log("procced 3");
                    return
                }
            }
        }
        console.log("procced");


        signUpUsingEmail(email, password)
            .then((userCredential) => {
                updateName(name).then(() => {
                    setUser(userCredential.user);
                    setLogged(true);
                    history.push(path);
                    setShowing(false);
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
                    {
                        emailErr && <div style={errMsgStyle}>{errorIcon} Please enter a valid email address</div>
                    }
                    <div className="input-field">
                        <input className="password" type={showing ? "text" : "password"} required />
                        <span className="show">
                            <button onClick={isShow}>{showing ? "Hide" : "Show"}</button>
                        </span>
                        <label>Password</label>
                    </div>

                    {
                        passErr === 1 && <div style={errMsgStyle}>{errorIcon} must be equal or more then 6 character.</div>
                    }

                    <div className="input-field">
                        <input className="password" type={showing ? "text" : "password"} required />
                        <span className="show">
                            <button onClick={isShow}>{showing ? "Hide" : "Show"}</button>
                        </span>
                        <label>Repeat Password</label>
                    </div>

                    {
                        passErr === 2 && <div style={errMsgStyle}>{errorIcon} Passwords are different please check again.</div>
                    }

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