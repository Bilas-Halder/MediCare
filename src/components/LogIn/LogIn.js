import React, { useEffect, useState } from 'react';
import "./LogIn.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';
import { useErrorIcon } from '../../hooks/useicons/useIcons';

export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
);
export const validPassword = new RegExp('(?=^.{6,}$)');


const LogIn = () => {

    const { user, setUser, logged, setLogged, logInUsingEmail, logInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from?.pathname;


    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const errorIcon = useErrorIcon();
    const errMsgStyle = {
        textAlign: "left",
        marginTop: "-18px",
        marginBottom: "18px",
        fontSize: "0.9rem",
        color: "#d70000"
    };


    const logInUsingEmailHandler = (e) => {
        e.preventDefault();
        const formElement = e.target.parentElement;
        const email = formElement.children[0].children[0].value;
        const password = formElement.children[1].children[0].value;


        if (!validEmail.test(email) && !validPassword.test(password)) {
            setEmailErr(true);
            setPassErr(false);
            return;
        }
        else if (!validEmail.test(email)) {
            setEmailErr(true);
            setPassErr(false);
            return;
        }
        else if (!validPassword.test(password)) {
            setEmailErr(false);
            setPassErr(true);
            return;
        }
        else {
            setEmailErr(false);
            setPassErr(false);
        }


        logInUsingEmail(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setLogged(true);
                history.push(path);
                formElement.reset();
            })
    }

    const logInUsingGoogleHandler = () => {
        logInUsingGoogle()
            .then(result => {
                console.log(path);
                setLogged(true);
                history.push(path)

            })
            .catch(err => console.log(err));
    }



    return (
        <div style={{ height: '90vh' }} className="d-flex justify-content-center align-items-center">
            <div className="form-container">
                {
                    path ?
                        <div className="log-in-header" style={{
                            fontSize: '25px',
                            color: "red"
                        }}>Please LogIn First</div>

                        : <div className="log-in-header">LogIn Form</div>
                }
                <form>
                    <div className="input-field">
                        <input type="text" required />
                        <label>Email or Username</label>
                    </div>
                    {
                        emailErr && <div style={errMsgStyle}>{errorIcon} Please enter a valid email address</div>
                    }
                    <div className="input-field">
                        <input className="password" type="password" required />
                        <span className="show">SHOW</span>
                        <label>Password</label>
                    </div>
                    {
                        passErr && <div style={errMsgStyle}>{errorIcon} Password character must be more then 6.</div>
                    }
                    <button className="primary-btn login-btn" onClick={logInUsingEmailHandler}>Log In</button>
                </form>
                <div className="auth">
                    Or log in with
                </div>
                <div className="links">
                    <div className="facebook">
                        <i className="fab fa-facebook-square"><span>Facebook</span></i>
                    </div>
                    <button onClick={logInUsingGoogleHandler} className="google">
                        <i className="fab fa-google-plus-square"><span>Google</span></i>
                    </button>
                </div>
                <div className="signup">
                    Not a member?
                    <NavLink to={
                        {
                            pathname: '/signup',
                            state: { from: path }
                        }
                    }> Signup now</NavLink>
                </div>
            </div>
        </div>

    );
};

export default LogIn;