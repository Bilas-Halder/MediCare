import React from 'react';
import '../LogIn/LogIn.css';
import './Feedback.css';

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="form-size">
                    <h2>Give your Feedback</h2>
                    <form>
                        <div className="input-field">
                            <input style={{ borderRadius: '5px' }} type="text" required />
                            <label>Email or Username</label>
                        </div>
                        <div className="input-field" style={{ height: '50px' }}>
                            <input style={{ borderRadius: '5px' }} type="text" required />
                            <label>Feedback</label>
                        </div>
                        <button className="primary-btn submit-btn" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;