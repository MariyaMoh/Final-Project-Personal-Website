import { Card, Col, Text } from '@nextui-org/react';
import React from 'react';
import { gql } from '@apollo/client';
import client from '../apolloClient';
import { Service } from '../types';
import styles from './Services.module.css';

interface ServiceCardProps {
  service: Service;
}

export default function Card1({ service }: ServiceCardProps) {
  return (
    // <div className={styles.exp}>
    <Card
      cover
      className={styles.cardscover}
      style={{ backgroundColor: '#f0b5d1;' }}
    >
      <Card.Header className={styles.cards}>
        <Text className={styles.ctitle}>{service.title}</Text>
      </Card.Header>
      <Card.Image
        src={service.image.url}
        height={340}
        width="100%"
        alt="Card image background"
      />
    </Card>
    // </div>
  );
}
