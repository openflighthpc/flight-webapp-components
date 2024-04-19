"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandbarLogo = BrandbarLogo;
exports.FooterLogo = FooterLogo;
exports.PoweredByLogo = PoweredByLogo;
exports.Cloud = Cloud;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _web_suite = _interopRequireDefault(require("../dist/images/web_suite.png"));

var _openflighthpc_footer = _interopRequireDefault(require("../dist/images/openflighthpc_footer.png"));

var _poweredby_white = _interopRequireDefault(require("../dist/images/poweredby_white.png"));

var _parting_cloud_l = _interopRequireDefault(require("../dist/images/parting_cloud_l.png"));

var _parting_cloud_r = _interopRequireDefault(require("../dist/images/parting_cloud_r.png"));

var _BrandingContext = require("./BrandingContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function BrandbarLogo() {
  var branding = (0, _BrandingContext.useBranding)();
  var logo = branding('brandbar.logo') || {
    url: _web_suite["default"],
    alt: "Flight Web Suite Logo"
  };
  return /*#__PURE__*/_react["default"].createElement("img", {
    alt: logo.alt,
    className: (0, _classnames["default"])(logo.classNames, 'branding-brandbar-logo'),
    src: logo.url
  });
}

function FooterLogo() {
  var branding = (0, _BrandingContext.useBranding)();
  var logo = branding('brandbar.logo') || {
    url: _openflighthpc_footer["default"],
    alt: "OpenflightHPC Logo"
  };
  return /*#__PURE__*/_react["default"].createElement("img", {
    alt: logo.alt,
    id: "footer-logo",
    src: logo.url
  });
}

function PoweredByLogo() {
  return /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Powered by Alces Flight",
    className: "top-right-logo",
    src: _poweredby_white["default"]
  });
}

function Cloud(props) {
  var side = props['side'];
  var id = "cloud-".concat(side);
  var src;

  if (side === 'l') {
    src = _parting_cloud_l["default"];
  } else {
    src = _parting_cloud_r["default"];
  }

  return /*#__PURE__*/_react["default"].createElement("img", {
    alt: "",
    id: id,
    className: "cloud",
    src: src
  });
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