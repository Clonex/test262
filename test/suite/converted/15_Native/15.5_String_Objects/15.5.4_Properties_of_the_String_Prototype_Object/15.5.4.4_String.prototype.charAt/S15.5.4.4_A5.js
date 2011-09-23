// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When String.prototype.charAt(pos) calls first calls ToString, giving it the this value as its argument
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.4_String.prototype.charAt/S15.5.4.4_A5.js
 * @description Change toString function, it trow exception, and call charAt()
 */

var __obj={
    valueOf:1,
    toString:function(){throw 'intostring'},
    charAt:String.prototype.charAt
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.charAt();
  $FAIL('#1: __obj={valueOf:1,toString:function(){throw \'intostring\'},charAt:String.prototype.charAt}; "var x = __obj.charAt()" lead to throwing exception');
} catch (e) {
  if (e !== 'intostring') {
    $ERROR('#1.1: Exception === \'intostring\'. Actual: exception ==='+e ); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////

