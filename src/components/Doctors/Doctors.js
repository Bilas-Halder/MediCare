import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctorsData from '../../hooks/useDoctorsData';
import Doctor from '../Doctor/Doctor';
import DoctorsBanner from '../DoctorsBanner/DoctorsBanner';

const Doctors = () => {
    const doctors = useDoctorsData();

    return (
        <>
            <DoctorsBanner></DoctorsBanner>

            <Container className="mt-5 text-center">
                <h1 className="my-5 py-3">Our Best Doctors</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        doctors.map((doctor, id) => <Doctor key={id} doctor={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default Doctors;