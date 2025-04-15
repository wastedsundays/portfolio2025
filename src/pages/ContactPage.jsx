import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >

            <section className='contact'>

                <ContactForm />
            </section>
        </motion.div>
    );
    };

export default ContactPage;