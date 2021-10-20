import React from 'react';
import './Service.css';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, iconURL, shortDescription, key } = service;
    return (
        <Col xm={12} sm={6} lg={4} className='col-customize'>
            <div className="service-navlink">
                <div className="d-flex align-items-center justify-content-between mx-3 mx-sm-0">
                    <div className="img-div">
                        <img className="w-100" src={iconURL} alt="img" />
                    </div>
                    <div className="service-text me-0 me-lg-4">
                        <h4 className="service-title">{title}</h4>
                        <p className="color-gray">
                            {shortDescription}
                        </p>
                        <NavLink className="primary-btn view-more-btn mt-3" to={`/service/${key}`} >View More</NavLink>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Service;