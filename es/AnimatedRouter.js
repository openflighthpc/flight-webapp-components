import React, { useEffect, useRef } from 'react';
import { CSSTransition } from "react-transition-group";
import classNames from 'classnames';
import ErrorBoundary from './ErrorBoundary';

function AnimatedRouter(_ref) {
  var AuthenticatedRoute = _ref.AuthenticatedRoute,
      Redirect = _ref.Redirect,
      Route = _ref.Route,
      Switch = _ref.Switch,
      exact = _ref.exact,
      routes = _ref.routes,
      sideNav = _ref.sideNav;
  var SideNav = sideNav;
  var pageRef = useRef(null);
  useEffect(function () {
    if (pageRef.current != null) {
      // Add this class when the app first renders.  Afterwards, the
      // CSSTransition component will add it and remove it as needed.
      pageRef.current.classList.add('page-enter-done');
    }
  }, []);
  return /*#__PURE__*/React.createElement(Switch, null, routes.map(function (_ref2) {
    var path = _ref2.path,
        Component = _ref2.Component,
        authenticated = _ref2.authenticated,
        sideNav = _ref2.sideNav;
    var MyRoute = authenticated ? AuthenticatedRoute : Route;
    return /*#__PURE__*/React.createElement(MyRoute, {
      Redirect: Redirect,
      Route: Route,
      exact: exact,
      key: path,
      path: path
    }, function (_ref3) {
      var match = _ref3.match;
      return /*#__PURE__*/React.createElement(CSSTransition, {
        "in": match != null,
        timeout: 300,
        classNames: "page",
        unmountOnExit: true
      }, /*#__PURE__*/React.createElement("div", {
        className: "page row",
        ref: pageRef
      }, /*#__PURE__*/React.createElement(ErrorBoundary, null, sideNav ? /*#__PURE__*/React.createElement(SideNav, null) : null, /*#__PURE__*/React.createElement("div", {
        className: classNames("centernav mt-4 col-12", {
          "col-md-9": sideNav,
          "col-lg-8": sideNav,
          "offset-md-0": sideNav,
          "offset-lg-0": sideNav,
          "mt-4": sideNav
        })
      }, /*#__PURE__*/React.createElement(Component, null)), sideNav ? /*#__PURE__*/React.createElement(SideNav, null) : null)));
    });
  }));
}

export default AnimatedRouter;