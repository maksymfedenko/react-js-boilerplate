import React, { PureComponent } from 'react';
import T from 'prop-types';
import cn from 'classnames';

class Button extends PureComponent {
  render() {
    const { onClick, className, disabled, children } = this.props;

    return (
      <button
        onClick={onClick}
        className={cn('btn', className, { disabled })}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: T.node,
  className: T.string,
  disabled: T.bool,
  onClick: T.func,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
