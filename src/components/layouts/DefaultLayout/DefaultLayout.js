import React, { PureComponent } from 'react';
import T from 'prop-types';

class DefaultLayout extends PureComponent {
  render() {
    return <div>{this.props.children}</div>;
  }
}

DefaultLayout.propTypes = {
  children: T.node,
};

export default DefaultLayout;
