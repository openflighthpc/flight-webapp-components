"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandbarLogo = BrandbarLogo;
exports.BrandbarHomeNav = BrandbarHomeNav;
exports.DashboardLogo = DashboardLogo;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _png_trans_logoNavbar = _interopRequireDefault(require("../dist/images/png_trans_logo-navbar.png"));

var _png_trans_logo = _interopRequireDefault(require("../dist/images/png_trans_logo.png"));

var _BrandingContext = require("./BrandingContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function BrandbarLogo() {
  var branding = (0, _BrandingContext.useBranding)();
  var logo = branding('brandbar.logo') || {
    url: _png_trans_logoNavbar["default"],
    alt: "OpenflightHPC Logo",
    height: "75"
  };
  return /*#__PURE__*/_react["default"].createElement("img", {
    alt: logo.alt,
    className: (0, _classnames["default"])(logo.classNames, 'branding-brandbar-logo'),
    src: logo.url,
    height: logo.height
  });
}

function BrandbarHomeNav() {
  var branding = (0, _BrandingContext.useBranding)();
  var environment = (0, _BrandingContext.useEnvironment)();
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "nav-link nav-menu-button",
    href: "/"
  }, branding('brandbar.home_link_text') || environment('environment.name') || environment('organisation.name') || 'Home'));
}

function DashboardLogo() {
  var branding = (0, _BrandingContext.useBranding)();
  var logo = branding('apps.dashboard.logo') || {
    url: _png_trans_logo["default"],
    alt: "OpenflightHPC Logo"
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "branding-apps-dashboard-logo-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: logo.alt,
    className: (0, _classnames["default"])('logo', logo.classNames, 'branding-apps-dashboard-logo'),
    src: logo.url
  }));
} // function UnbreakableImg({ src }) {
//   const [ loaded, setLoaded ] = useState(false);
//   const classes = `mw-100 mx-auto mb-3`;
//   return (
//     <img
//       alt=""
//       className={ loaded ? `${classes} d-block` : `${classes} d-none`}
//       src={src}
//       onLoad={() => setLoaded(true)}
//     />
//   );
// }