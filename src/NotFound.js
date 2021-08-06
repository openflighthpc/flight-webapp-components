import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-wrap d-flex flex-row align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <span className="display-1 d-block">404</span>
            <div className="mb-4 lead">This is not the page you are looking for!</div>
            <Link
              className="btn btn-link"
              to="/"
            >
              <span>Move Along...</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
