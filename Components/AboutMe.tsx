import React from 'react';
import styles from './AboutMe.module.css';
import { useQuery, gql } from '@apollo/client';
import { Profile } from '../types';
import Image from 'next/image';
import { Card, Row, Text, Col, styled } from '@nextui-org/react';
import { motion } from 'framer-motion';

import editor from '/public/images/editor.png';

export default function AboutMe({ profiles }: { profiles: Profile[] }) {
  return (
    <div
      className={styles.ProfileSection}
      style={{ justifyContent: 'space-between' }}
    >
      {profiles.map((profiles) => (
        <div key={profiles.id} className={styles.CardContainer}>
          {/* <Container gap={1}> */}
          <Row gap={4} justify="center">
            <Col className={styles.MainCard}>
              <Card
                className={styles.img}
                css={{
                  mw: '5000px',
                  backgroundColor: '#A5C3FD',
                  justifyContent: 'space-between',
                }}
                data-aos="fade-right"
              >
                <img
                  style={{ borderRadius: 5 }}
                  // transition={{ type: 'spring', velocity: 10, stiffness: 30 }}
                  // initial={{ x: -300, opacity: 0 }}
                  // animate={{ x: 0, opacity: 1 }}
                  // exit={{ x: 300, opacity: 0 }}
                  src={profiles.profileImage.url}
                  alt=""
                />
              </Card>
            </Col>
            <Col>
              <h1 className={styles.aboutTitle} id="AboutMe">
                About Me
              </h1>
              <Card
                css={{ mw: '400px', backgroundColor: '#ff80a9' }}
                data-aos="fade-left"
              >
                <Row gap={0} css={{ justifyContent: 'center' }}>
                  <Card css={{ mw: '400px' }}>
                    <h6>{profiles.position}</h6>
                  </Card>
                </Row>
              </Card>
            </Col>

            <div className={styles.EditorImageWrapper}>
              <Image
                className={styles.EditorImage}
                src={editor.src}
                width={125}
                height={125}
                alt="editor image"
                data-aos="zoom-in-up"
              />
            </div>
          </Row>
        </div>
      ))}
    </div>
  );
}
