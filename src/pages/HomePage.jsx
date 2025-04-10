import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import FeaturedWork from '../components/FeaturedWork';
import ContactForm from '../components/ContactForm';
import { REST_PATH } from '../globals/globals';

const HomePage = () => {

    const homeRestPath = `${REST_PATH}pages/158`;

    const [homeData, setHomeData] = useState ([]);
    const [homeLoaded, setHomeLoaded] = useState (false);

    useEffect(() => {
        const fetchHomeData = async () => {
            const response = await fetch(homeRestPath);
            if (!response.ok) {
                setHomeLoaded(false);
                console.log('There was a problem fetching the data');
                return;
            } else{
                const homeFetched = await response.json();
                setHomeData(homeFetched);
                setHomeLoaded(true); 
            }
        }
        fetchHomeData();
    }
    , [homeRestPath]);



    return (
        <>
            { homeLoaded ? (
            <motion.main className='home-page'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                >
                <section className='hero-section'>
                    <h1>Adam H</h1>
                    <p>Front End Developer & Maker of things</p>
                </section>
                
                <section className='featured-work'>
                    <h2>Work</h2>
                    <FeaturedWork />
                </section>

                <section className='wp-api-content'>
                    <h2>Content from WP</h2>

                        <div className='wp-data' dangerouslySetInnerHTML={{ __html: homeData.content.rendered }}></div>

                </section>  

                <section className='contact'>
                    <h2>Contact</h2>
                    <ContactForm />
                </section>

            </motion.main>
            ) : (
                <Loading />
            )}
        </>
    );
    };

export default HomePage;