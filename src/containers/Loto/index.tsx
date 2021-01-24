import React, { FC } from 'react';
import { Card } from '../../components';
import { H5 } from '../../components/Typography';

import styles from './styles.module.scss';

const LotoGame: FC = ({ children }) => {
  return (
    <section className={styles.lotoGameWrapper}>
      <Card className={styles.fieldsWrapper}>
        <H5 className={styles.title}>Билет 1</H5>
        {children}
      </Card>
    </section>
  );
};

export default LotoGame;
