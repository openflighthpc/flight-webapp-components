import React from 'react';

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
    <a
      disabled={disabled || submitting}
      {...props}
    >
      {content}
    </a>
  );
};

export default StatefulButton;
