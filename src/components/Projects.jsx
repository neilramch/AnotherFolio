import React from 'react'

function Projects() {
  return (
    <>
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


    </>
  )
}

export default Projects
