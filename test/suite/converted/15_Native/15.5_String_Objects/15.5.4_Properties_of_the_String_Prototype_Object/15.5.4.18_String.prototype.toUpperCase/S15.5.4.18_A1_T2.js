// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toUpperCase()
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.18_String.prototype.toUpperCase/S15.5.4.18_A1_T2.js
 * @description Instance is Boolean object
 */

var __instance = new Boolean;

__instance.toUpperCase = String.prototype.toUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toUpperCase() !== "FALSE") {
  $ERROR('#1: __instance = new Boolean; __instance.toUpperCase = String.prototype.toUpperCase;  __instance.toUpperCase() === "FALSE". Actual: '+__instance.toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

