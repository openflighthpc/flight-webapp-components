import React from 'react';
import classNames from 'classnames';
import { Button } from 'reactstrap';

function ActionButton({
  act,
  acting,
  actingButtonText,
  buttonText,
  className,
  color,
  icon,
  size,
}) {
  return (
    <Button
      className={classNames("btn", className, { [acting]: 'disabled' })}
      color={color}
      disabled={acting}
      onClick={act}
      size={size}
    >
      {
        acting ?
          <i className="fa fa-spinner fa-spin mr-1"></i> :
          <i className={`fa ${icon} mr-1`}></i>
      }
      <span>{ acting ? actingButtonText : buttonText }</span>
    </Button>
  );
}

export default ActionButton;
