import React from 'react';
import './Service.css';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, imgURL, shortDescription } = service;
    return (
        <Col xm={12} sm={6} lg={4} className='col-customize'>
            <NavLink className="service-navlink" to="/home">
                <div className="d-flex align-items-center justify-content-between mx-3 mx-sm-0">
                    <div className="img-div">
                        <img className="w-100" src={imgURL} alt="img" />
                    </div>
                    <div className="service-text me-0 me-lg-4">
                        <h4 className="service-title">{title}</h4>
                        <p className="color-gray">
                            {shortDescription}
                        </p>
                    </div>
                </div>
            </NavLink>
        </Col>
    );
};

export default Service;