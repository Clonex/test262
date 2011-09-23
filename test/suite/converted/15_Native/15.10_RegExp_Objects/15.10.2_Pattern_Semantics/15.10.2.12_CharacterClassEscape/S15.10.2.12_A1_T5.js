// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production CharacterClassEscape :: s evaluates by returning the set of characters
 * containing the characters that are on the right-hand side of the WhiteSpace (7.2) or LineTerminator (7.3) productions
 *
 * @path 15_Native/15.10_RegExp_Objects/15.10.2_Pattern_Semantics/15.10.2.12_CharacterClassEscape/S15.10.2.12_A1_T5.js
 * @description Tested string is "0123456789_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"'
 */

//CHECK#1
var non_s = "0123456789_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()-+={[}]|\\:;'<,>./?" + '"';
if (/\s/.exec(non_s) !== null) {
   $ERROR('#1: non-s');
}

//CHECK#2
var non_S = '\f\n\r\t\v ';
var regexp_s = /\s/g;
var k = 0;
while (regexp_s.exec(non_S) !== null) {
   k++;
}

if (non_S.length !== k) {
   $ERROR('#2: non-S');
}  

