import { useEffect, useState } from "react";
import { REST_PATH } from "../globals/globals";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const FeaturedWork = () => {

    const featuredWorkRestPath = `${REST_PATH}ahdesigns-work?acf_format=standard&featured-work=2`;
    const [featuredWorkData, setFeaturedWorkData] = useState ([]);
    const [featuredWorkLoaded, setFeaturedWorkLoaded] = useState (false);

    useEffect(() => {
        const fetchFeaturedWorkData = async () => {
            const response = await fetch(featuredWorkRestPath);
            if (!response.ok) {
                setFeaturedWorkLoaded(false);
                console.log('There was a problem fetching the data');
                return;
            } else{
                const featuredWorkFetched = await response.json();
                setFeaturedWorkData(featuredWorkFetched);
                setFeaturedWorkLoaded(true); 
            }
        }
        fetchFeaturedWorkData();
    }, [featuredWorkRestPath]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const randomData = (data) => {
        const shuffledData = shuffleArray([...data]);
        const displayData = shuffledData.slice(0, 4);
        return displayData;
    }

    const featuredItems = randomData(featuredWorkData);

    return (
        <>
        {featuredWorkLoaded ? ( 
            <div className='featured-project-display'>
                {featuredItems.map((project, i) => (
                    <article className='featured-project-card' key={i}>
                        
                        {project.featured_images['medium'] && (
                            <img srcSet={project.featured_images['medium'].srcset} alt={project.featured_images['medium'].alt}/>
                        )}

                        <h3 className='featured-project-card-title'>{project.title.rendered}</h3>
                        <Link to={`/work/${project.slug}`}>
                            Details
                        </Link>
                    </article>
                ))}
            </div>
        ) : (
            <Loading />
        )}

        </>

    )};

export default FeaturedWork;