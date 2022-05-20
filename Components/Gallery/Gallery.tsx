import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { styled, StyledDivider } from '@nextui-org/react';
import styles from './Gallery.module.css';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function Gallery({ images }: any) {
  const [[page, direction], setPage] = useState([0, 0]);

  const wrap = (x: number) => {
    const length = images.length;
    return ((x % length) + length) % length;
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const img = images[wrap(page)];

  return (
    <>
      <h1>Gallery</h1>
      <div className={styles.container}>
        <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
          <motion.img
            className={styles.image}
            key={page}
            src={img.image.url}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          />
          <motion.h2
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              y: 100,
              opacity: 0,
            }}
          >
            {img.title}
          </motion.h2>
        </AnimatePresence>
        <div className={styles.next} onClick={() => paginate(1)}>
          {'‣'}
        </div>
        <div className={styles.prev} onClick={() => paginate(-1)}>
          {'‣'}
        </div>
      </div>
    </>
  );
}
