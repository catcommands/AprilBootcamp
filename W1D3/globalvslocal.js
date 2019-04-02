/* What is global scope vs what is local scope,
explained by Jaffar, in the most easiest way
*/

// Global Scope:

var g = 10;

//Variable(s) defined outside a function are called global scope.


// Local Scope

function data() {
    var l = 5;
}

//While variable(s) defined inside a function are called local.
//Local Scope is a variable which is just wrapped up by/inside a function.