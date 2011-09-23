// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The length property of Array has the attribute ReadOnly
 *
 * @path 15_Native/15.4_Array_Objects/15.4.3_Properties_of_the_Array_Constructor/S15.4.3_A2.3.js
 * @description Checking if varying the length property fails
 */

//CHECK#1
x = Array.length;
Array.length = Infinity;
if (Array.length !== x) {
  $ERROR('#1: x = Array.length; Array.length = Infinity; Array.length === x. Actual: ' + (Array.length));
}


