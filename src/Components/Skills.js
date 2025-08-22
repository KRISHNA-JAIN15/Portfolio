import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaDocker, FaAws} from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiRedis, DiPostgresql} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiTensorflow, SiVercel, SiNextdotjs, SiPrisma, SiApachekafka, SiTypescript, SiTailwindcss, SiGraphql, SiSupabase, SiFirebase, SiStripe} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        'Javascript': <DiJavascript1/>,
        'Python': <FaPython/>,
        'Typescript': <SiTypescript/>,
        
        'React': <FaReact/>,
        'Next.js': <SiNextdotjs/>,
        'TailwindCSS': <SiTailwindcss/>,
        
        'Node': <DiNodejs/>,
        'Express': <SiExpress/>,
        'GraphQL': <SiGraphql/>,
        
        'MongoDB': <SiMongodb/>,
        'PostgreSQL': <DiPostgresql/>,
        'Redis': <DiRedis/>,
        'Prisma': <SiPrisma/>,
        
        'Docker': <FaDocker/>,
        'Vercel': <SiVercel/>,
        'AWS': <FaAws/>,
        
        'Kafka': <SiApachekafka/>,
        
        'Tensorflow': <SiTensorflow/>,
        
        'Git': <FaGitAlt/>,
        'Github': <FaGithub/>,
        'Npm': <FaNpm/>,
        
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills