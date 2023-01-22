"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(x) {
    if(x === true) {
        return true;
    } else {
        return false;
    }
}
console.log(isTrue(""));

function isFalse(x) {
    if(x === false) {
        return true;
    } else {
        return false;
    }
}
console.log(isFalse([1,2]));

function not(x) {
    let y = Boolean(x);
    if(y == true) {
        return false;
    } else {
        return true;
    }
}
console.log(not(false));

function addOne(x) {
    let y = parseInt(x);
    if(typeof x === "number") {
        return x + 1;
    } else if(typeof x === "string") {
        return y + 1;
    } else {
        return y + 1;
    }
}
console.log(addOne(true));

function isEven(x) {
    let y = parseInt(x);
    if(typeof y === "number" && y % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven("banana"));

function isIdentical(x, y) {
    if(x === y) {
        return true;
    } else {
        return false;
    }
}
console.log(isIdentical("javascript", "java"));

function isEqual(x, y) {
    if(x == y) {
        return true;
    } else {
        return false;
    }
}
console.log(isEqual("java", "javascript"));

function or(x, y) {
    return x || y;
}
console.log(or("hello", "world"));

function and(x, y) {
    return x && y;
}
console.log(and("hello" , "world"));

function concat(x, y) {
    if(typeof x !== "string" && typeof y !== "string") {
        let yChange = y.toString();
        let xChange = x.toString();
        return xChange.concat(yChange);
    } else {
        return x.concat(y);
    }
}
console.log(concat("code", undefined))