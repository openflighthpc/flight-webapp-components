import React, { useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ErrorBoundary from './ErrorBoundary';
import {Footer} from "../es";

function AnimatedRouter({
  AuthenticatedRoute,
  Redirect,
  Route,
  Switch,
  exact,
  routes,
  useLocation,
}) {
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
          {routes.map(({ key, path, Component, authenticated }) => {
            const MyRoute = authenticated ? AuthenticatedRoute : Route;
            return (
              <MyRoute
                Redirect={Redirect}
                Route={Route}
                exact={exact}
                key={key || path}
                path={path}
              >
                <div className="page row" ref={pageRef}>
                  <ErrorBoundary>
                    <Component />
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
