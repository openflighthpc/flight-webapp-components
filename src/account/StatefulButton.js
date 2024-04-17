import React from 'react';
import {Button} from "reactstrap";

const StatefulButton = ({
  children,
  disabled,
  submitting, 
  submittingText,
  ...props
}) => {
  let content;
  if (submitting) {
    content = (
      <span>
        <i className="fa fa-spinner fa-spin" />
        {' '}{submittingText || 'Submitting...'}
      </span>
    );
  } else {
    content = children;
  }
  return (
    <Button
      disabled={disabled || submitting}
      {...props}
    >
      {content}
    </Button>
  );
};

export default StatefulButton;
