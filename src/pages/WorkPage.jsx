import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const WorkPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >
        <div>
            <h1>Work Page</h1>
            <p>This page shows all the projects</p>
        </div>
        </motion.div>
    );
    };

export default WorkPage;