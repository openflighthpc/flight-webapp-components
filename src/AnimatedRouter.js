import React, { useEffect, useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import classNames from 'classnames';

import ErrorBoundary from './ErrorBoundary';

function AnimatedRouter({ AuthenticatedRoute, Redirect, Route, exact, routes, sideNav }) {
  const SideNav = sideNav;
  const pageRef = useRef(null);
  useEffect(() => {
    if (pageRef.current != null) {
      // Add this class when the app first renders.  Afterwards, the
      // CSSTransition component will add it and remove it as needed.
      pageRef.current.classList.add('page-enter-done');
    }
  }, []);

  return (
    <React.Fragment>
      {routes.map(({ path, Component, authenticated, sideNav }) => {
        const MyRoute = authenticated ? AuthenticatedRoute : Route;
        return (
          <MyRoute
            Redirect={Redirect}
            Route={Route}
            exact={exact}
            key={path}
            path={path}
          >
            {({ match }) => { 
              return (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page row" ref={pageRef}>
                    <ErrorBoundary>
                      { sideNav ? <SideNav /> : null }
                      <div className={classNames( "centernav mt-4 col-12", {
                        "col-md-9": sideNav,
                        "col-lg-8": sideNav,
                        "offset-md-0": sideNav,
                        "offset-lg-0": sideNav,
                        "mt-4": sideNav,
                      })}>
                      <Component />
                    </div>
                    { sideNav ? <SideNav /> : null }
                  </ErrorBoundary>
                </div>
              </CSSTransition>
              );
            }}
          </MyRoute>
        );
      })}
    </React.Fragment>
  );
}

export default AnimatedRouter;
