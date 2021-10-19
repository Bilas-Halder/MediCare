import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServicesData from '../../hooks/useServicesData';
import Service from '../Service/Service';

const Services = () => {
    const services = useServicesData();

    return (
        <div id="services">
            <p className="text-center" style={{ fontSize: "2rem", fontWeight: "500", paddingTop: "60px" }}>Our Best Services</p>
            <Container>
                <Row>
                    {
                        services.map(service => <Service key={service.key} service={service}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;