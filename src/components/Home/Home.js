import React from 'react';
import Banner from '../Banner/Banner';
import MedicalCare from '../MedicalCare/MedicalCare';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services></Services>
            <MedicalCare></MedicalCare>
        </>
    );
};

export default Home;