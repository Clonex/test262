// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @path 11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A2.4_T3.js
 * @description Checking with undeclarated variables
 * @noStrict
 */

//CHECK#1
try {
  x && (x = true);
  $ERROR('#1.1: x && (x = true) throw ReferenceError. Actual: ' + (x && (x = true)));
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x && (x = true) throw ReferenceError. Actual: ' + (e));
  }
}

//CHECK#2
if (((y = true) && y) !== true) {
  $ERROR('#2: ((y = true) && y) === true');
}


