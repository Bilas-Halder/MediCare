import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useDoctorsData from '../../hooks/useDoctorsData';
import Doctor from '../Doctor/Doctor';
import DoctorsBanner from '../DoctorsBanner/DoctorsBanner';

const Doctors = () => {
    const a = {
        name: "Angela Adams",
        field: "Cardiac Surgery",
        imgURL: "https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/team-member-1.jpg"
    }

    const doctors = useDoctorsData();
    console.log(doctors);

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