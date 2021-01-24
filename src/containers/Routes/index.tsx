import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../appConstants';
import { Loto } from '../../pages';

const Routes = () => (
    <Switch>
        <Route path={routes.main.root} component={Loto} />
        {/* <Redirect to={routes.main.root} /> */}
    </Switch>
);

export default Routes;
