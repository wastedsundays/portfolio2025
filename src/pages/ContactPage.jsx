import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >

            <div>
                <h1>Contact Page</h1>
                <p>This page shows the contact form. All pages will show it at the bottom</p>
            </div>
        </motion.div>
    );
    };

export default ContactPage;