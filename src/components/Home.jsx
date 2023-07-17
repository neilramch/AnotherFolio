import React, { useState } from 'react'
import '../App.css'
import { useSpring, animated } from 'react-spring';

function Home() {

  const [style, set] = useSpring(() => ({ transform: 'scale(1)'} ));
  const [underlineClass, setUnderlineClass] = useState('underline');

  
  return (

    <>
    <div className='home-container'>
    <div 
        className='greeting' 
        onMouseEnter={() => setUnderlineClass('underline')}
        onMouseLeave={() => setUnderlineClass('underline redraw')}
      >
        <h2>Hi, my name is</h2>
        <h1>Neil Ramchandani</h1>
        <div className={underlineClass}></div>

      </div>
      <div className='bio'>
        <p>I am currently studying MIS at Central Connecticut University. I have a strong passion for programming and technology. I have experience building applications using framerworks like React and .NET. I enjoy creating a fun and easy-to-use UIs.</p>
      </div>

      <animated.img 
        className='my-img'
        src="https://media.licdn.com/dms/image/C4E03AQF-HH1j0J1jSQ/profile-displayphoto-shrink_800_800/0/1649545766264?e=1695254400&v=beta&t=9fgVT3oQNskj2n4J_24JcUn-Nj1jVrynYVAZk8N8R40"
        alt="Your Image"
        style={style}
        onMouseEnter={() => set({ transform: 'scale(1.1)' })}
        onMouseLeave={() => set({ transform: 'scale(1)' })}
      />

      <div className='dev-icons'>
     
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-dot-net-plain-wordmark"></i>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-csharp-line-wordmark"></i>     
      </div>


      </div>

      </>
  );
}

export default Home;
