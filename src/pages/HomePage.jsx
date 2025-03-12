import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >

            <h1>Home Page</h1>
            <p>This is the Home page</p>

            

        </motion.div>
    );
    };

export default HomePage;