"use strict";

// groundskeeper-willie, babel-plugin-console-source
console.log("/Users/hannamf/Documents/code/babel-demo/index.js (3:0)", 'Log me'); // groundskeeper-willie-disable-line

/*

// @babel/plugin-proposal-optional-chaining
const a = { b: () => 'foo' };
console.log('b', a?.b()); // groundskeeper-willie-disable-line
console.log('c', a?.c?.d?.e?.f()); // groundskeeper-willie-disable-line

/*

// babel-plugin-react-require
console.log(<head></head>); // groundskeeper-willie-disable-line

/*

// faster.js - compiles to a for loop
const mappedArr = ['a', 'b', 'c'].map(a => a+'i');

/*

// babel-plugin-function-composition
const add5 = a => a+5;
const multiplyBy7 = a => a*7;
const add5AndMultiplyBy7 = add5 & multiplyBy7;
console.log(add5AndMultiplyBy7(4)); // groundskeeper-willie-disable-line

/*

// babel-plugin-implicit-function
const implicitFunction = ~'implicit function executed';
Promise
  .resolve()
  .then(implicitFunction)
  .then(console.log) // groundskeeper-willie-disable-line

  */