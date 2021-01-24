import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './styles.module.scss';
import LotoTable from '../../containers/Loto/LotoTable';
import LotoResult from '../../containers/Loto/LotoResult';
import { routes } from '../../appConstants';
import LotoGame from '../../containers/Loto/index';

const Loto = () => {
  return (
    <div className={styles.main}>
      <LotoGame>
        <Switch>
          <Route
            path={routes.main.result}
            component={LotoResult}
          />
          <Route
            path={routes.main.root}
            component={LotoTable}
          />
        </Switch>
      </LotoGame>
    </div>
  );
};

export default Loto;
