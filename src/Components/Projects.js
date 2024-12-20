import React from 'react';
import ProjectBox from './ProjectBox';
import BombLabImage from '../images/BombLabImage.png';
import PokemonHPPredictorImage from '../images/PokemonImage.jpeg'
import MintBoltImage from '../images/MintboltImage.jpg'
import JarvisImage from '../images/JarvisImage.jpg'

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PokemonHPPredictorImage} projectName="PokemonHPPredictor" />
        <ProjectBox projectPhoto={BombLabImage} projectName="BombLab" />
        <ProjectBox projectPhoto={JarvisImage} projectName="Larvis" />
        <ProjectBox projectPhoto={MintBoltImage} projectName="MintBolt" />
      </div>

    </div>
  )
}

export default Projects