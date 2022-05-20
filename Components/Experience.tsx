import React from 'react';
import { About } from '../types';
import styles from './Experience.module.css';
import { Card, Row } from '@nextui-org/react';

export default function Experience({ abouts }: { abouts: About[] }) {
  return (
    <div className={styles.aboutMesSection}>
      <div>
        <div>
          <h1 id="Experience" className={styles.exptitle}>
            Experience
          </h1>
          {abouts.map((abouts) => (
            <div key={abouts.id}>
              <Row className={styles.expcard} gap={10}>
                <Card
                  className={styles.cardsinfo}
                  data-aos="zoom-in"
                  css={{ mw: '400px', m: '30px', backgroundColor: '#ffc466' }}
                >
                  <p>{abouts.experienceTitle}</p>
                  <p>{abouts.description}</p>
                </Card>
                <Card
                  data-aos="zoom-out"
                  css={{ mw: '400px', m: '30px', backgroundColor: '#6ecfbc' }}
                >
                  <p>{abouts.experienceTitle}</p>
                  <p>{abouts.description}</p>
                </Card>
                <Card
                  data-aos="zoom-in"
                  css={{ mw: '400px', m: '30px', backgroundColor: '#ff80a9' }}
                >
                  <p>{abouts.experienceTitle}</p>
                  <p>{abouts.description}</p>
                </Card>
              </Row>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
