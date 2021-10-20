import React from 'react';
import { Card } from 'react-bootstrap';
import bannerBgImg from '../../images/doctors-background.jpg';
import "../Banner/Banner.css";
import './DoctorsBanner.css';

const DoctorsBanner = () => {
    return (
        <Card className="text-dark card-customize">
            <Card.Img src={bannerBgImg} alt="Card image" />
            <Card.ImgOverlay>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="banner-text">
                        <Card.Title style={{ color: "white" }} className="our-text our-doc">Our Doctors</Card.Title>

                    </div>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default DoctorsBanner;