import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import careDoc from '../../images/medicare.jpg';
import './MedicalCare.css';

const MedicalCare = () => {
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="d-flex align-items-center h-100">
                            <div>
                                <h2 className="care-h2">How To Live a</h2>
                                <h1 className="care-h1">Healthy Lifestyle?</h1>
                                <p className="care-text">
                                    You know the obvious behaviors that describe someone who is healthy and takes care of themselves. A healthy person doesn't smoke, tries to maintain a healthy weight, eats healthy foods with plenty of fruits, vegetables and fiber and, of course, exercises on a regular basis.
                                    Then there are other elements to add to the list. A healthy person also knows how to manage stress, does everything in moderation all the time.
                                    <br />
                                    <br />
                                    When you look at everything that could possibly go into a healthy lifestyle,just how hard all of those things are in our current world.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div>
                            <img style={{ width: "100%" }} src={careDoc} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MedicalCare;