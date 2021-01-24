import React, { useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { routes } from '../../../appConstants';
import { history } from '../../../utils/history';

const LotoResult = () => {
  const location = useLocation();
  const { pathname } = location;
  const isTicketWon = pathname.slice(8) === 'true';

  useEffect(() => {
    setTimeout(() => {
      history.push(routes.main.root);
    }, 10000);
  }, []);
  
  return (
    <div className={styles.result}>{`Ого, вы ${isTicketWon ? 'выиграли' : 'проиграли'}! Поздравляем!`}</div>
  );
};

export default LotoResult;
