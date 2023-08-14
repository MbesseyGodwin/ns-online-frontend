import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Reports = lazy(() => import('./reports/Reports'));
const FacilityPage = lazy(() => import('./reports/FacilityPage'));
const Landing = lazy(() => import('./landing-page/Landing'))

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/landing" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/reports" component={Reports} />
          <Route path="/facility/:datimCode" component={FacilityPage} />
          <Redirect to="/landing" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
