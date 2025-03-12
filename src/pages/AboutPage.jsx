import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const AboutPage = () => {
    return (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        >
            <div>
                <h1>About Page</h1>
                <p>This is the About me page</p>
            </div>
    </motion.div>
    );
    };

export default AboutPage;