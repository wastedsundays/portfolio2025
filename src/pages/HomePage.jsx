import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
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
        <motion.div className='home-page'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >

            <h1>Home Page</h1>
            <p>This is the Home page. Static content set by react. The next section is from API</p>
            
            <section className='featured-work'>
                <h2>Featured Work</h2>
                <p>Here are some of the projects I have worked on recently</p>
            </section>

            <section className='api-content'>
                <h2>Content from WP</h2>
                { homeLoaded ? (
                    <div dangerouslySetInnerHTML={{ __html: homeData.content.rendered }}></div>
                ) : (
                    <Loading />
                )}

            </section>  

            <section className='contact'>
                <h2>Contact</h2>
                <p>Get in touch with me</p>
            </section>

        </motion.div>
    );
    };

export default HomePage;