import React from 'react';
import Banner from '../Banner/Banner';
import MedicalCare from '../MedicalCare/MedicalCare';
import Services from '../Services/Services';
import Feedback from '../Feedback/Feedback';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <MedicalCare></MedicalCare>
            <Feedback></Feedback>
        </>
    );
};

export default Home;