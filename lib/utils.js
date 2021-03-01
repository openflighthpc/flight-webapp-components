"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorCode = errorCode;
exports.getResourcesFromResponse = getResourcesFromResponse;
exports.isObject = isObject;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Return the first error code from a parsed response body.
function errorCode(responseBody) {
  if (!isObject(responseBody)) {
    return null;
  }

  if (!Array.isArray(responseBody.errors)) {
    return null;
  }

  if (!isObject(responseBody.errors[0])) {
    return null;
  }

  return responseBody.errors[0].code;
}

function getResourcesFromResponse(data) {
  if (!isObject(data)) {
    return null;
  }

  if (!Array.isArray(data.data)) {
    return null;
  }

  return data.data;
}

function isObject(object) {
  return (typeof object === 'function' || _typeof(object) === 'object') && !!object;
}

;