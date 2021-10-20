import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import bannerBgImg from '../../images/banner-background.jpg';
import "./Banner.css";

const Banner = () => {
    const { user, logged } = useAuth();
    return (
        <Card className="text-dark card-customize">
            <Card.Img src={bannerBgImg} alt="Card image" />
            <Card.ImgOverlay>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="banner-text">
                        <Card.Title className="welcome-text">Welcome <span className="text-gray">to</span></Card.Title>
                        <Card.Text className="our-text text-gray">
                            Our Awesome Clinic
                            <span style={{ color: "#535353", fontWeight: "500" }}> {user.displayName}</span>
                        </Card.Text>
                        {
                            user.email ? "" : <NavLink className='primary-btn' to='/login'>Log In</NavLink>
                        }
                    </div>
                </div>
            </Card.ImgOverlay>
        </Card>
    );
};

export default Banner;