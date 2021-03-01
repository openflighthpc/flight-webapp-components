"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var _useEventListener = _interopRequireDefault(require("./useEventListener"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FullscreenButton(_ref) {
  var onFullscreenChange = _ref.onFullscreenChange,
      onZenChange = _ref.onZenChange;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var toggleDropdown = function toggleDropdown() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFullscreen = _useState4[0],
      setFullscreen = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isZen = _useState6[0],
      setZen = _useState6[1];

  var fullScreenChangeCallbackRef = (0, _react.useRef)(onFullscreenChange);
  var zenChangeCallbackRef = (0, _react.useRef)(onZenChange);
  (0, _useEventListener["default"])(window, 'keydown', function handleKeypress(e) {
    if (!(e.ctrlKey || e.shiftKey || e.altKey) && e.code === "F11") {
      document.documentElement.requestFullscreen();
      e.preventDefault();
    }
  });
  (0, _react.useEffect)(function () {
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
      document.documentElement.requestFullscreen();
    }
  }

  function toggleZen() {
    setZen(function (prevZen) {
      if (prevZen) {
        document.body.classList.remove('zen-mode');

        if (typeof zenChangeCallbackRef.current === 'function') {
          zenChangeCallbackRef.current(false);
        }
      } else {
        document.body.classList.add('zen-mode');

        if (typeof zenChangeCallbackRef.current === 'function') {
          zenChangeCallbackRef.current(true);
        }
      }

      return !prevZen;
    });
  } // Turn zen mode off when this component is unmounted.


  (0, _react.useEffect)(function () {
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

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Dropdown, {
    className: "btn-group mr-1",
    isOpen: dropdownOpen,
    toggle: toggleDropdown
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    color: "light",
    size: "sm",
    onClick: defaultAction
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa ".concat(isFullscreen || isZen ? 'fa-compress' : 'fa-expand', " mr-1")
  }), /*#__PURE__*/_react["default"].createElement("span", null, isFullscreen ? 'Exit Fullscreen' : isZen ? 'Exit Zen mode' : 'Fullscreen')), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
    split: true,
    color: "light",
    size: "sm"
  }), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
    onClick: toggleFullscreen
  }, isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownItem, {
    onClick: toggleZen
  }, isZen ? 'Exit Zen mode' : 'Zen mode')));
}

var _default = FullscreenButton;
exports["default"] = _default;