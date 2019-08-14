"use strict";

var _react = _interopRequireDefault(require("react"));

var _a$c, _a$c$d, _a$c$d$e;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// groundskeeper-willie, babel-plugin-console-source
console.log("/Users/hannamf/Documents/code/babel-demo/index.js (3:0)", 'Log me'); // groundskeeper-willie-disable-line
// @babel/plugin-proposal-optional-chaining

var a = {
  b: function b() {
    return 'foo';
  }
};
console.log("/Users/hannamf/Documents/code/babel-demo/index.js (8:0)", 'b', a === null || a === void 0 ? void 0 : a.b()); // groundskeeper-willie-disable-line

console.log("/Users/hannamf/Documents/code/babel-demo/index.js (9:0)", 'c', a === null || a === void 0 ? void 0 : (_a$c = a.c) === null || _a$c === void 0 ? void 0 : (_a$c$d = _a$c.d) === null || _a$c$d === void 0 ? void 0 : (_a$c$d$e = _a$c$d.e) === null || _a$c$d$e === void 0 ? void 0 : _a$c$d$e.f()); // groundskeeper-willie-disable-line
// babel-plugin-react-require

console.log("/Users/hannamf/Documents/code/babel-demo/index.js (12:0)", _react["default"].createElement("head", null)); // groundskeeper-willie-disable-line
// faster.js - compiles to a for loop

var _defined = ['a', 'b', 'c'];

var _defined2 = function _defined2(a) {
  return a + 'i';
};

var mappedAer = new Array(_defined.length); // babel-plugin-function-composition

for (var _i2 = 0; _i2 <= _defined.length - 1; _i2++) {
  mappedAer[_i2] = _defined2(_defined[_i2], _i2, _defined);
}

var add5 = function add5(a) {
  return a + 5;
};

var multiplyBy7 = function multiplyBy7(a) {
  return a * 7;
};

var add5AndMultiplyBy7 = function add5AndMultiplyBy7() {
  return (multiplyBy7)((add5).apply(void 0, arguments));
};

console.log("/Users/hannamf/Documents/code/babel-demo/index.js (21:0)", add5AndMultiplyBy7(4)); // groundskeeper-willie-disable-line
// babel-plugin-implicit-function

var implicitFunction = function implicitFunction() {
  return 'implicit function executed';
};

Promise.resolve().then(implicitFunction).then(console.log); // groundskeeper-willie-disable-line