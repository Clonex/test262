// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @path 11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A2.4_T1.js
 * @description Checking with "="
 */

//CHECK#1
var x = false; 
if (((x = true) && x) !== true) {
  $ERROR('#1: var x = false; ((x = true) && x) === true');
}

//CHECK#2
var x = false; 
if ((x && (x = true)) !== false) {
  $ERROR('#2: var x = false; (x && (x = true)) === false');
}


