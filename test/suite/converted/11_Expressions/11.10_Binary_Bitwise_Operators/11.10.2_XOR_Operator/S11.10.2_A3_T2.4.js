// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator x ^ y returns ToNumber(x) ^ ToNumber(y)
 *
 * @path 11_Expressions/11.10_Binary_Bitwise_Operators/11.10.2_XOR_Operator/S11.10.2_A3_T2.4.js
 * @description Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Undefined
 */

//CHECK#1
if ((1 ^ undefined) !== 1) {
  $ERROR('#1: (1 ^ undefined) === 1. Actual: ' + ((1 ^ undefined)));
}

//CHECK#2
if ((undefined ^ 1) !== 1) {
  $ERROR('#2: (undefined ^ 1) === 1. Actual: ' + ((undefined ^ 1)));
}

//CHECK#3
if ((new Number(1) ^ undefined) !== 1) {
  $ERROR('#3: (new Number(1) ^ undefined) === 1. Actual: ' + ((new Number(1) ^ undefined)));
}

//CHECK#4
if ((undefined ^ new Number(1)) !== 1) {
  $ERROR('#4: (undefined ^ new Number(1)) === 1. Actual: ' + ((undefined ^ new Number(1))));
}

