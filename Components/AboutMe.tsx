import React from 'react';
import { About } from '../types';
import styles from './AboutMe.module.css';
import { Card, Row } from '@nextui-org/react';

export default function AboutMe({ abouts }: { abouts: About[] }) {
  return (
    <div
      className={styles.aboutMesSection}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div>
        <div>
          <h1 id="Experience" className={styles.exptitle}>
            Experience
          </h1>
          {abouts.map((abouts) => (
            <div key={abouts.id}>
              <Row className={styles.expcard} gap={10}>
                <Card
                  css={{ mw: '400px', m: '30px', backgroundColor: '#ffc466' }}
                >
                  <p>{abouts.experienceTitle}</p>
                  <p>{abouts.description}</p>
                </Card>
                <Card
                  css={{ mw: '400px', m: '30px', backgroundColor: '#6ecfbc' }}
                >
                  <p>{abouts.experienceTitle}</p>
                  <p>{abouts.description}</p>
                </Card>
                <Card
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