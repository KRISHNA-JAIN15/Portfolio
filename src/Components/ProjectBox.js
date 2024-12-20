import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MintBoltDesc : " Kotlin application features a chatbot designed to assist users with various financial and document-related tasks. The chatbot leverages local APIs for functionality related to transaction management, document processing, payment and invoicing, budgeting and finance management, and general queries.",
    MintBoltGithub : "https://github.com/KRISHNA-JAIN15/MintBolt",

    LarvisDesc : "Multifunctional personal assistant system called ‘LARVIS’ that integrates various features like voice recognition, task automation, and mini-games. It can handle tasks such as browsing the web, checking weather and news, setting reminders, running math quizzes, sending emails, playing Tic-Tac-Toe and Hangman, and providing Wikipedia summaries",
    LarvisGithub : "https://github.com/KRISHNA-JAIN15/Larvis",

    BombLabDesc:"Python-based Bomb Defusal Game challenges players to defuse a simulated bomb by completing various phases. Each phase presents a unique task, including retrieving passwords, solving riddles, decoding Morse code, and performing programming challenges in C and Assembly. Successfully completing all phases defuses the bomb, while mistakes or incomplete tasks lead to a simulated explosion.",
    BombLabGithub:"https://github.com/KRISHNA-JAIN15/BOMB_LAB" ,
    
    PokemonHPPredictorDesc:"ANN model to Predict the HP of Pokemon based on various features. Tech: Python, Web Scraping , Tensorflow and Keras.",
    PokemonHPPredictorGithub:"https://github.com/KRISHNA-JAIN15/Pokemon-HP-Predictor",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

        </div>
    </div>
  )
}

export default  ProjectBox