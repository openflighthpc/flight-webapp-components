function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useEffect, useRef, useState } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import useEventListener from './useEventListener';

function FullscreenButton(_ref) {
  var onFullscreenChange = _ref.onFullscreenChange,
      onZenChange = _ref.onZenChange;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var toggleDropdown = function toggleDropdown() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFullscreen = _useState4[0],
      setFullscreen = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isZen = _useState6[0],
      setZen = _useState6[1];

  var fullScreenChangeCallbackRef = useRef(onFullscreenChange);
  var zenChangeCallbackRef = useRef(onZenChange);
  useEventListener(window, 'keydown', function handleKeypress(e) {
    if (!(e.ctrlKey || e.shiftKey || e.altKey) && e.code === "F11") {
      document.documentElement.requestFullscreen();
      e.preventDefault();
    }
  });
  useEffect(function () {
    document.onfullscreenchange = function (event) {
      if (document.fullscreenElement == null) {
        setFullscreen(false);

        if (typeof fullScreenChangeCallbackRef.current === 'function') {
          fullScreenChangeCallbackRef.current(false);
        }
      } else {
        setFullscreen(true);

        if (typeof fullScreenChangeCallbackRef.current === 'function') {
          fullScreenChangeCallbackRef.current(true);
        }
      }
    };

    return function () {
      document.onfullscreenchange = null;
    };
  }, [setFullscreen]);

  function toggleFullscreen() {
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      if (isZen) {
        toggleZen();
      }

      document.documentElement.requestFullscreen();
    }
  }

  function toggleZen() {
    setZen(function (prevZen) {
      if (prevZen) {
        exitZen();
      } else {
        if (isFullscreen) {
          document.exitFullscreen();
        }

        enterZen();
      }

      return !prevZen;
    });
  }

  function enterZen() {
    document.body.classList.add('zen-mode');

    if (typeof zenChangeCallbackRef.current === 'function') {
      zenChangeCallbackRef.current(true);
    }
  }

  function exitZen() {
    document.body.classList.remove('zen-mode');

    if (typeof zenChangeCallbackRef.current === 'function') {
      zenChangeCallbackRef.current(false);
    }
  } // Turn zen mode off when this component is unmounted.


  useEffect(function () {
    return function () {
      document.body.classList.remove('zen-mode');
    };
  }, []);

  function defaultAction() {
    if (isFullscreen) {
      toggleFullscreen();
    } else if (isZen) {
      toggleZen();
    } else {
      toggleFullscreen();
    }
  }

  return /*#__PURE__*/React.createElement(Dropdown, {
    className: "btn-group mr-1",
    isOpen: dropdownOpen,
    toggle: toggleDropdown
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa ".concat(isFullscreen || isZen ? 'fa-compress' : 'fa-expand', " ml-2 link white-text"),
    title: isFullscreen ? 'Exit Fullscreen' : isZen ? 'Exit Zen mode' : 'Fullscreen',
    onClick: defaultAction
  }), /*#__PURE__*/React.createElement(DropdownToggle, {
    split: true,
    color: "transparent",
    className: "white-text"
  }), /*#__PURE__*/React.createElement(DropdownMenu, null, /*#__PURE__*/React.createElement(DropdownItem, {
    onClick: toggleFullscreen
  }, isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'), /*#__PURE__*/React.createElement(DropdownItem, {
    onClick: toggleZen
  }, isZen ? 'Exit Zen mode' : 'Zen mode')));
}

export default FullscreenButton;