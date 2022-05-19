import React from 'react';
import styles from './AboutMe.module.css';
import { motion } from 'framer-motion';
import img1 from './images/img1.jpg';

export default function movingtitle() {
  return (
    <div>
      {/* <img src={img1} alt="" width={100} height={100} /> */}
      <div className={styles.aboutMesSection}>
        <h4 className={styles.hg}>
          $hi there! This is Mariya, a Front-end Developer
        </h4>
      </div>
    </div>
  );
}
