import React from 'react';
import { useParams } from 'react-router-dom';

const SinglePage = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Single Page</h1>
            <p>This is the Single page with id: {id}</p>
        </div>
    );
    };

export default SinglePage;