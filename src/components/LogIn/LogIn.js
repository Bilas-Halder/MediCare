import React, { useEffect } from 'react';
import "./LogIn.css";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

const LogIn = () => {

    const { user, setLogged, logInUsingEmail, logInUsingGoogle } = useAuth();
    const tempUser = {};

    const history = useHistory();
    const location = useLocation();
    const path = location.state?.from?.pathname;


    const logInHandler = (e) => {
        e.preventDefault();

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
                            className="password" type="password" required />
                        <span className="show">SHOW</span>
                        <label>Password</label>
                    </div>
                    <button className="primary-btn login-btn" onClick={logInHandler}>Log In</button>
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
                    Not a member? <NavLink to="/signup"> Signup now</NavLink>
                </div>
            </div>
        </div>

    );
};

export default LogIn;