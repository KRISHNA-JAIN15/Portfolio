import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Krishna Jain</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I love the process of transforming raw ideas into impactful websites 
            or products that enhance lives. I thrive on challenges that push my boundaries 
            as a developer, creating work I can be truly proud of.<br /><br />
            I am fluent in <b>Python</b> and <b>C++</b> and am working on projects in the <b>MERN</b> stack for web development.<br />
            My expertise includes building <b>machine learning models</b> using <b>TensorFlow</b>, <b>Keras</b>, and <b>Scikit-learn</b>. 
            I have developed APIs for chatbots and financial management applications.<br />
            I plan to expand my skill set by learning <b>DevOps</b>, <b>Power-BI</b>, and <b>TypeScript</b> in the near future. <br /><br />
          
            I am always excited to dive into new technologies and work on projects that have real-world impact.<br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>    
   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home