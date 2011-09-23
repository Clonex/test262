// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(x) and Type(y) are Undefined-s, return false
 *
 * @path 11_Expressions/11.9_Equality_Operators/11.9.5_The_Strict_Does_not_equals_Operator/S11.9.5_A6.1.js
 * @description void 0, eval("var x") is undefined
 */

//CHECK#1
if (undefined !== undefined) {
  $ERROR('#1: undefined === undefined');
}

//CHECK#2
if (void 0 !== undefined) {
  $ERROR('#2: void 0 === undefined');
}

//CHECK#3
if (undefined !== eval("var x")) {
  $ERROR('#3: undefined === eval("var x")');
}

