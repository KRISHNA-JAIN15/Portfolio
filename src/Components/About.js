import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Krishna Jain</b>.  
            I'm a <b>Full Stack Developer</b>, <b>DevOps enthusiast</b>, and an <b>AI/ML Engineer</b>, currently in my third year of <b>B.Tech in Computer Science and Engineering</b>.<br /><br />
            
            I have completed internships as a <b>Machine Learning Engineer</b> at <b>Renew Energy</b> and as an <b>AI Intern</b> at <b>Grow Digi</b>, where I contributed to projects involving intelligent automation and data-driven solutions.<br /><br />

            My core expertise lies in building scalable and high-performance web applications using the <b>MERN stack</b> with <b>TypeScript</b>. I design backend systems with <b>Node.js</b>, <b>Express</b>, <b>GraphQL</b>, and <b>Redis</b> for caching, while implementing event-driven architectures with <b>Kafka</b>.  
            I also have hands-on experience in <b>DevOps</b>, including containerization with <b>Docker</b> and deploying solutions on <b>AWS</b>.<br /><br />

            Beyond web development, I work on <b>machine learning</b> models for predictive analytics and automation using <b>TensorFlow</b>, <b>Keras</b>, and <b>Scikit-learn</b>. I love integrating AI solutions with web applications, creating smarter and more interactive systems.<br /><br />

            I’m always looking for opportunities to collaborate on impactful projects where I can both contribute and grow. Feel free to connect with me — links are in the footer.<br /><br />

            When I’m not coding, I’m probably brainstorming ideas, enjoying music, or just chilling.  
            Catch me on <a href="https://www.instagram.com/_ufo_believers_/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a>.

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

        {/* Frontend Technologies */}
        <Skills skill='React' />
        <Skills skill='Next.js' />
        <Skills skill='Javascript' />
        <Skills skill='Typescript' />

        {/* Backend Technologies */}
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='GraphQL' />

        {/* Databases & Storage */}
        <Skills skill='MongoDB' />
        <Skills skill='PostgreSQL' />
        <Skills skill='Redis' />
        <Skills skill='Prisma' />

        {/* DevOps & Infrastructure */}
        <Skills skill='Docker' />
        <Skills skill='AWS' />

        {/* Message Queues & Streaming */}
        <Skills skill='Kafka' />

        {/* AI & Machine Learning */}
        <Skills skill='Python' />
        <Skills skill='Tensorflow' />

        {/* Development Tools */}
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Npm' />

        {/* Programming Languages */}
        <Skills skill='C++' />

      </div>
    </>
  )
}

export default About;
