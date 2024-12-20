import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Krishna Jain</h4>
      <div className='footerLinks'>
        <a href="https://github.com/KRISHNA-JAIN15" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/krishna-jain-4160b62a6/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:jainkrishna1502@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer