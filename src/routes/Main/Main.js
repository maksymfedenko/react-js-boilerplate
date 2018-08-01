import React, { PureComponent } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import DefaultLayout from 'components/layouts/DefaultLayout/DefaultLayout';
import Intro from 'routes/Intro/Intro';

class Main extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={Intro} />
          <Redirect to="/" />
        </Switch>
      </DefaultLayout>
    );
  }
}

export default Main;
