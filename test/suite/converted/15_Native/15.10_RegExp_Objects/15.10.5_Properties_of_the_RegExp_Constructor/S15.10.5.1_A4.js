// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The RegExp.prototype property has the attribute ReadOnly
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.5_Properties_of_the_RegExp_Constructor/S15.10.5.1_A4.js
 * @description Checking if varying the RegExp.prototype property fails
 */

//CHECK#1
if (RegExp.hasOwnProperty('prototype') !== true) {
	$FAIL('#1: RegExp.hasOwnProperty(\'prototype\') === true');
}

__obj = RegExp.prototype;

RegExp.prototype = function(){return "shifted";};

//CHECK#2
if (RegExp.prototype !== __obj) {
	$ERROR('#2: __obj = RegExp.prototype; RegExp.prototype = function(){return "shifted";}; RegExp.prototype === __obj. Actual: ' + (RegExp.prototype));
}


