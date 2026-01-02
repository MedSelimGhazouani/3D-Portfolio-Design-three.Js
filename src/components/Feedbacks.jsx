import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { skills } from "../constants";

const SkillCard = ({
  index,
  skillTitle,
  skills,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='flex justify-between items-center gap-1'>
      <div className='flex-1 flex flex-col'>
        <h3 className='text-white font-bold text-[20px]'>
          {skillTitle}
        </h3>
        <ul className='mt-4 text-white'>
          {skills.map((skill, idx) => (
            <li key={idx} className='text-[16px]'>
              <span className='font-bold'>{skill.name}:  </span> 
              <span className='text-secondary text-[16px] font-semibold'> {skill.proficiency}</span>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={image}
        alt={`skill-${skillTitle}`}
        className='w-16 h-16 rounded-full object-cover'
      />
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Skills</p>
          <h2 className={styles.sectionHeadText}>Skills Overview.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {skills.map((skill, index) => (
          <SkillCard key={skill.skillTitle} index={index} {...skill} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "");
