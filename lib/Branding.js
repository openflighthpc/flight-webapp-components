"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandbarLogo = BrandbarLogo;
exports.BrandbarText = BrandbarText;
exports.DashboardLogo = DashboardLogo;
exports.ClusterDescription = ClusterDescription;
exports.ClusterLogo = ClusterLogo;

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

function BrandbarText() {
  var branding = (0, _BrandingContext.useBranding)();

  if (branding('brandbar.text')) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "branding-brandbar-text-wrapper"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "branding-brandbar-text"
    }, branding('brandbar.text')));
  } else {
    return null;
  }
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
}

function ClusterDescription() {
  var environment = (0, _BrandingContext.useEnvironment)();
  var description = environment('environment.description');

  if (description) {
    return /*#__PURE__*/_react["default"].createElement("p", null, description);
  } else {
    return null;
  }
}

function ClusterLogo() {
  var environment = (0, _BrandingContext.useEnvironment)();
  var logo = environment('environment.logo');

  if (logo) {
    return /*#__PURE__*/_react["default"].createElement("img", {
      alt: logo.alt,
      className: (0, _classnames["default"])('logo', logo.classNames),
      src: logo.url
    });
  } else {
    return null;
  }
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