import classNames from 'classnames';
import React from 'react';

function Spinner({ text, center='horizontal', className, size='medium' }) {
  return (
    <div
      className={classNames({
        'text-center': center === 'horizontal',
        'vertical-center': center === 'vertical',
        'both-center': center === 'both',
      })}
      style={{fontSize: size}}
    >
      <i className="fa fa-spinner fa-spin mr-1"></i>
      {text}
    </div>
  );
}

export function AppLoadingSpinner() {
  return <Spinner text="Loading..." center="both" size="x-large" />;
}

export default Spinner;
