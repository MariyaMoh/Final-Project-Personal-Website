import React from 'react';
import { Grid } from '@nextui-org/react';
import Card1 from './ServiceCard';
import { Container, Card, Row, Text, Col, Spacer } from '@nextui-org/react';
import { Service } from '../types';
import styles from './Services.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// ServiceSection
export default function Services({ services }: { services: Service[] }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.servicesSection} data-aos='fade-up'>
      <h1 id="Services" className={styles.servicesTitle}>Services</h1>
      <Spacer y={2} />
      <Row gap={4} css={{marginLeft: '0'}} justify='space-around'>
        {services.map((service) => (
          <Col key={service.id}>
            <Card1 service={service} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
