import React, { PureComponent } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import DefaultLayout from 'components/layouts/DefaultLayout/DefaultLayout';
// import Intro from 'routes/Intro/Intro';
// import About from 'routes/About/About';
// import Team from 'routes/Team/Team';
// import Cases from 'routes/Cases/Cases';
// import Askus from 'routes/Askus/Askus';
// import Contact from 'routes/Contact/Contact';

class Main extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <Switch>
          {/* <Route exact path="/" component={Intro} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/cases" component={Cases} />
          <Route exact path="/askus" component={Askus} />
          <Route exact path="/contact" component={Contact} /> */}
          <Redirect to="/" />
        </Switch>
        lol
      </DefaultLayout>
    );
  }
}

export default Main;
