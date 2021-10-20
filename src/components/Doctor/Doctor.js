import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useFacebookIcon, useInstagramIcon, useLinkedInIcon, useTwiterIcon } from '../../hooks/useicons/useIcons';
import "./Doctor.css";

const Doctor = ({ doctor }) => {

    const { name, field, imgURL } = doctor;
    const facebook = useFacebookIcon();
    const instagram = useInstagramIcon();
    const linkedIn = useLinkedInIcon();
    const twiter = useTwiterIcon();
    return (
        <Col>
            <Card style={{ border: "none" }}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="doctor-img">
                        <Card.Img variant="top" src={imgURL} />
                    </div>
                </div>
                <Card.Body className="text-center">
                    <Card.Title className="card-name">{name}</Card.Title>
                    <p className="field">{field}</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <Card.Text className="doctor-text">
                            Hi, i am {name}. And I am an expert in {field}. You can Contact me in the given links bellow.
                        </Card.Text>
                    </div>

                    <div className="d-flex justify-content-center align-items-center doctors-social">
                        {facebook}
                        {instagram}
                        {linkedIn}
                        {twiter}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;
