import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { AnimatePresence, motion } from 'framer-motion';
import { REST_PATH } from '../globals/globals';
import OtherWork from '../components/OtherWork';
import ErrorPage from './ErrorPage';
import ContactForm from '../components/ContactForm';



const SinglePage = () => {
    const { slug } = useParams();
    const [projectData, setProjectData] = useState(null);
    const [toolsData, setToolsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const projectRestPath = `${REST_PATH}ahdesigns-work?acf_format=standard&slug=${slug}&embed`;
    const projectToolsPath = `${REST_PATH}ahdesigns-tools?acf_format=standard&per_page=100`;
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const [projectResponse, toolsResponse] = await Promise.all([
            fetch(projectRestPath),
            fetch(projectToolsPath),
          ]);
          
          if (!projectResponse.ok || !toolsResponse.ok) {
            throw new Error("Failed to fetch data");
          }
  
          const project = await projectResponse.json();
          const tools = await toolsResponse.json();
  
          setProjectData(project);
          setToolsData(tools);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
      // eslint-disable-next-line
    }, [slug]);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }

  const getToolImage = (toolTitle) => {
    const tool = toolsData.find(tool => tool.title.rendered === toolTitle)
    return tool ? tool.acf.tool_image : null
}

    return (
      <AnimatePresence exitBeforeEnter>
      <motion.main
        key={slug}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {projectData.length > 0 ? (
        <div>
          <section className='hero-section'>
            <h1>{projectData[0].title.rendered}</h1>
            {projectData[0].featured_images['1536x1536'] && (
                              <img 
                              srcSet={projectData[0].featured_images['1536x1536'].srcset}   
                              sizes="(max-width: 600px) 300px,
                              (max-width: 1024px) 768px,
                              (max-width: 1920px) 1024px,
                              1920px"
                              alt={projectData[0].featured_images['1536x1536'].alt}
                              />
                          )}
          </section>

          <section className='project-details'>
            <h2>Details</h2>

            <div dangerouslySetInnerHTML={{__html:projectData[0].content.rendered}}></div>

            
            
            {projectData[0].acf.live_project_site && 
                        (<a href={projectData[0].acf.live_project_site} target='_blank' rel='noreferrer'>
                            See It
                        </a>)
                        }

            {projectData[0].acf.project_repo &&
                (<a href={projectData[0].acf.project_repo} target='_blank' rel='noreferrer'>
                    GitHub
                    </a>)
            }
          </section>

          <section className='project-tools'>
            {projectData[0].acf.work_tools && projectData[0].acf.work_tools.length > 0 && (
              <>
                        <div className='project-tools'>
                        <h2 style={{color: projectData[0].acf.project_primary_color}}>Toolbox</h2>
                            
                            {projectData[0].acf.work_tools.map((tool, i) => (
                                <div key={i}>
                                    <div className={tool.post_title}>                                     
                                        <img src={getToolImage(tool.post_title)} alt={`${tool.post_title} icon card`} />
                                    </div>
                                </div>
                            ))}
                        </div>
              </>
                    )}

          </section>
          <OtherWork id={projectData[0].id} />
          <ContactForm />
        </div>
        ) : (
          <ErrorPage />
        )}
      </motion.main>
      </AnimatePresence>
    );
  };
  
  export default SinglePage;