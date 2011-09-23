// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * NonEscapeSequence is not EscapeCharacter
 *
 * @path 07_Lexical_Conventions/7.8_Literals/7.8.4_String_Literals/S7.8.4_A4.3_T7.js
 * @description EscapeCharacter :: SingleEscapeCharacter :: one of b f n r t v
 */

//CHECK#bfnrtv
if ("b" === "\b") {
  $ERROR('#b');
}

if ("f" === "\f") {
  $ERROR('#f');
}

if ("n" === "\n") {
  $ERROR('#n');
}

if ("r" === "\r") {
  $ERROR('#r');
}

if ("t" === "\t") {
  $ERROR('#t');
}

if ("v" === "\v") {
  $ERROR('#v');
}


