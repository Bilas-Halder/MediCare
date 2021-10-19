import React from 'react';
import './SingleService.css';
import { useParams } from 'react-router';

const SingleService = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>ID: {id}</h1>
        </div>
    );
};

export default SingleService;