import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Krishna Jain</b>
            I'm a <b>MERN stack web developer</b> and a <b>ML Enthusiast</b> and a second year college student pursuing <b>BTech in CSE</b>. <br/><br/>
            I have done an internship as a <b>ML Engineer</b> at Renew Energy.
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do photography, you can check out some of my shots here <a href="https://www.instagram.com/_ufo_believers_/?hl=en" target='_blank'>Instagram.</a>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Python' />
        <Skills skill='Javascript' />
        <Skills skill='Tensorflow' />
        
      </div>
    </>
  )
}

export default About