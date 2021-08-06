import React, { useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import classNames from 'classnames';

import ErrorBoundary from './ErrorBoundary';

function AnimatedRouter({
  AuthenticatedRoute,
  Redirect,
  Route,
  Switch,
  exact,
  routes,
  sideNav,
  useLocation,
}) {
  const SideNav = sideNav;
  const location = useLocation();
  const pageRef = useRef(null);
  useEffect(() => {
    if (pageRef.current != null) {
      // Add this class when the app first renders.  Afterwards, the
      // CSSTransition component will add it and remove it as needed.
      pageRef.current.classList.add('page-enter-done');
    }
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
      >
        <Switch location={location} >
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
                <div className="page row" ref={pageRef}>
                  <ErrorBoundary>
                    { sideNav ? <SideNav /> : null }
                    <div
                      className={classNames( "centernav mt-4 col-12", {
                        "col-md-9": sideNav,
                        "col-lg-8": sideNav,
                        "offset-md-0": sideNav,
                        "offset-lg-0": sideNav,
                        "mt-4": sideNav,
                      })}
                    >
                      <Component />
                    </div>
                    { sideNav ? <SideNav /> : null }
                  </ErrorBoundary>
                </div>
              </MyRoute>
            );
          })}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRouter;
