import React from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const SinglePage = () => {
    const { id } = useParams();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >
            <div>
                <h1>Single Page</h1>
                <p>This is the Single page with id: {id}</p>
            </div>
        </motion.div>
    );
    };

export default SinglePage;