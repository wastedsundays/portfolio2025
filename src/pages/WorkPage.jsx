import React from 'react';
// eslint-disable-next-line
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { REST_PATH } from '../globals/globals';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

const WorkPage = () => {
    const workRestPath = `${REST_PATH}ahdesigns-work?acf_format=standard`;

    const [workData, setWorkData] = useState([]);
    const [workLoaded, setWorkLoaded] = useState(false);

    useEffect(() => {
        const fetchWorkData = async () => {
        const workResponse = await fetch(workRestPath);
        if (!workResponse.ok) {
            setWorkLoaded(false);
            console.error('There was a problem fetching the work data');
            return;
        } else {
            const workFetched = await workResponse.json();
            setWorkData(workFetched);
            setWorkLoaded(true);    
        }
    }
    fetchWorkData();
    }
    , [workRestPath]);


    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            >
        <div>
            <h1>Work Page</h1>
            <p>This page shows all the projects</p>
        </div>
        
        <section>
            {workLoaded ?
            
            <div> 
            {workData.map((project, i) => {
                // Check if the project should have the 'featured-project' class
                const projectClass = project["featured-work"][0] === 2 ? 'project featured-project' : 'project';

                return (
                <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className={projectClass} key={i}>
                    <Link to={`/work/${project.slug}`} >
                    {project.featured_images['medium'] && (
                        <img srcSet={project.featured_images['medium'].srcset} />
                    )}
                    <h2>{project.title.rendered}</h2>
                    </Link>
                </motion.div>
                );
            })}
            </div>
        :  
            <Loading />
        }
        </section>

        </motion.main>
    );
    };

export default WorkPage;