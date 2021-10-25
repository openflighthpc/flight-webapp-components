import React from 'react';

function NotFound({ homeLink }) {
  const HomeLink = homeLink;
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">This is not the page you are looking for!</div>
            <HomeLink />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
