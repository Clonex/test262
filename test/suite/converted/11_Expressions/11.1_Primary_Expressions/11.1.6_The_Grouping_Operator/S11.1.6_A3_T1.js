// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * "This" operator only evaluates Expression
 *
 * @path 11_Expressions/11.1_Primary_Expressions/11.1.6_The_Grouping_Operator/S11.1.6_A3_T1.js
 * @description Applying grouping operator to Boolean
 */

// Check for Boolean

//CHECK#1
if ((true) !== true) {
  $ERROR('#1: (true) === true');
}

//CHECK#2
var x = new Boolean(true);
if ((x) !== x) {
  $ERROR('#2: var x = new Boolean(true); (x) === x. Actual: ' + ((x)));
}

