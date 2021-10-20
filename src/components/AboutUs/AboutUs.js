import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../MedicalCare/MedicalCare.css';

const AboutUs = () => {
    return (
        <>
            <div className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="d-flex align-items-center h-100">
                                <div>
                                    <h2 className="care-h2">A Great Place</h2>
                                    <h1 className="care-h1">for Medical Care</h1>
                                    <p className="care-text">
                                        No matter a major or a minor injury, Our Medicare is the best location for medical surgeries. Although the environment may not be peaceful, it has top healthcare facilities and experts. The cost of living and treatment is also comparatively cheaper in our medicare. Though being a Visa-free country, it has very modern and expert health care facilities and experts.
                                        <br />
                                        <br />
                                        When you look at everything that could possibly go into a healthy lifestyle,just how hard all of those things are in our current world.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <img style={{ width: "100%" }} src="https://i.ibb.co/jbgLVRC/h4-img-1.jpg" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="mt-5">
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div>
                                <img style={{ width: "100%" }} src="https://i.ibb.co/F5h1Hcg/h4-img-2.jpg" alt="" />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="d-flex align-items-center h-100">
                                <div>
                                    <h2 className="care-h2 my-3 my-lg-0">We Are Your</h2>
                                    <h1 className="care-h1">Partners For Life</h1>
                                    <p className="care-text">
                                        Everyone on our staff is dedicated to patient satisfaction. We always appreciate feedback to help us ensure that we are offering our patients the highest quality services and meeting their needs.No matter a major or a minor injury, Our Medicare is the best location for medical surgeries. Although the environment may not be peaceful, it has top healthcare facilities and experts.

                                        <br />
                                        <br />
                                        The cost of living and treatment is also comparatively cheaper in our medicare. Though being a Visa-free country, it has very modern and expert health care facilities and experts.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default AboutUs;