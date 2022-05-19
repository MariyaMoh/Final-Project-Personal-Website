import React from 'react'
import styles from './Contact.module.css';
export default function Contact() {
  return (
    <div className={styles.contactinfo}>
      <h1 className={styles.contacttitle} id="Contact"> Do not be a stranger .</h1>
      <h6 className={styles.contactdesc}>
        I am an active member on ( some of ) the social media . Feal free to
        follow me, comment or message me. i am excited to hear from you .{' '}
      </h6>
    </div>
  );
}
