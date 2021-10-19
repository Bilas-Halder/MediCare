import React from 'react';
import './SingleService.css';
import { useParams } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import '../MedicalCare/MedicalCare.css'

const SingleService = () => {
    const { id } = useParams();
    const { servicesData } = useAuth();
    const service = servicesData.find(s => s.key === id);
    console.log(service);
    return (
        <div className="mt-5 d-flex align-items-center" style={{ minHeight: "90vh" }}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="d-flex align-items-center h-100">
                            <div>
                                <h1>{service.title}</h1>
                                <p className="care-text">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div>
                            <img style={{ width: "100%" }} src={service.imgURL} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleService;