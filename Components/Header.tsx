import Link from 'next/link';
import styles from './Header.module.css';
import { motion } from 'framer-motion';

const navItems = [
  {
    href: '/#AboutMe',
    title: 'About Me',
  },
  {
    href: '/#Services',
    title: 'Services',
  },
  {
    href: '/#Experience',
    title: 'Experience',
  },
  {
    href: '/#Contact',
    title: 'Contact',
  },
  {
    href: '/gallery',
    title: 'Gallery',
  },
];

export const Header = () => (
  <header className={styles.header}>
    <motion.h1
      transition={{ type: 'spring', velocity: 10, stiffness: 30 }}
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <Link href="/">
        <a className={styles.logo}>
          <span>Mariya</span>Moh
        </a>
      </Link>
    </motion.h1>
    <motion.nav
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
      className={styles.nav}
    >
      {navItems.map((item) => (
        <span key={item.title}>
          <Link href={item.href}>
            <a className={styles.navLink}>{item.title}</a>
          </Link>
        </span>
      ))}
    </motion.nav>
  </header>
);
