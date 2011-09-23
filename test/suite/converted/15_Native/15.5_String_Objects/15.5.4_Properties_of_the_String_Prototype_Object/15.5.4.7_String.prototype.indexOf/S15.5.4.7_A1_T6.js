// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.indexOf(searchString, position)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.7_String.prototype.indexOf/S15.5.4.7_A1_T6.js
 * @description Call indexOf(searchString, position) function with x argument of new String object, where x is undefined variable
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "" indexOf(undefined) evaluates to indexOf("",0)
if (new String("undefined").indexOf(x) !== 0) {
  $ERROR('#1: var x; new String("undefined").indexOf(x) === 0. Actual: '+new String("undefined").indexOf(x) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

