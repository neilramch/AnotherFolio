import React, { useState, useEffect} from 'react'
import{ useSpring, animated } from 'react-spring'

function Projects() {

    const [scrollY, setScrollY] = useState(0);

    function logit() {
        setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
        window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
        window.removeEventListener("scroll", logit);
        };
    });

    const fadeIn = useSpring({
        to: {
            opacity: scrollY / 100  // adjust the denominator to control the speed of fade-in
        }
    });


    return (
        <animated.div style={fadeIn}>
            <div className='projects-container'>

            <h3>My Projects</h3>


            <div className='my-projects'>


            {/* First project */}

            <div className='project'>

                <div className='project-image' data-aos='fade-right'></div>
                <div className="project-content" data-aos='fade-left'>
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
            </div>

            {/* Second project */}

              <div className='project'>

                <div className='project-image' data-aos='fade-right'></div>
                <div className="project-content" data-aos='fade-left'>
                    <h2>Title</h2>
                    <p>Description</p>
                </div>
            </div>
                
            {/* Third project */}
            <div className='project'>

                <div className='project-image' data-aos='fade-right'></div>

                <div className="project-content" data-aos='fade-left'>
                    <h2>Title</h2>
                    <p>Description</p>
                </div>

            </div>

            

            
            </div>

        </div>

        </animated.div>
  )
}

export default Projects
