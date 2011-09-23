// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "This" operator only evaluates Expression
 *
 * @path 11_Expressions/11.1_Primary_Expressions/11.1.6_The_Grouping_Operator/S11.1.6_A3_T2.js
 * @description Applying grouping operator to Number
 */

//Check for Number

//CHECK#1
if ((1) !== 1) {
  $ERROR('#1: (1) === 1. Actual: ' + ((1)));
}

//CHECK#2
var x = new Number(1);
if ((x) !== x) {
  $ERROR('#2: var x = new Number(1); (x) === x. Actual: ' + ((x)));
}

