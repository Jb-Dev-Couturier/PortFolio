import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';

const abouts = [
  {
    title: 'Developpeur Web',
    description: 'Realise vos projets avec le frameworks REACT',
    imgUrl: images.about01,
  },
  {
    title: 'Frontend Développeur',
    description: 'Detail graphique, design et Responsive',
    imgUrl: images.about02,
  },
  {
    title: 'Backend Développeur',
    description: "Creation dataBase, routage et deploiement.",
    imgUrl: images.about03,
  },
  {
    title: 'MERN Stack',
    description: 'Utilisation MERN, from scratch, for You !! ',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Je sais qu'un
        <span> Bon développement </span>
        <br />
        peut offrir de
        <span> bonnes opportunités</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
