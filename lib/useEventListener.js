"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function useEventListener(element, eventName, handler) {
  var savedHandler = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    savedHandler.current = handler;
  }, [handler]);
  (0, _react.useEffect)(function () {
    var isSupported = element && element.addEventListener;
    if (!isSupported) return;

    var eventListener = function eventListener(event) {
      return savedHandler.current(event);
    };

    element.addEventListener(eventName, eventListener);
    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

;
var _default = useEventListener;
exports["default"] = _default;