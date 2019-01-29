/*
    Author: Adolfo Gonzalez
    Date: 1/27/2019

    File: compare.js

    This is the javascript file with the functions for js-reviewII.html.

    ==========================================================================================
    The == operator compares objects by identity. But sometimes you’d rather compare the values
    of their actual properties. Write a function objEquals that takes two objects and returns true
    only if they have the same properties and property values. The Object.keys function might be useful!
    ====================================================================================================
*/

//variable
var obj = {here: {is: "an"}, object: 2};

//function that takes two objects as parameters
function objEquals(one, two){

    if(one === two) return true;

    var k1 = Object.keys(one);
    var k2 = Object.keys(two);

    if (one == null || typeof one != "object" || two == null || typeof two != "object") return false;

    if (k1.length != k2.length) return false;

    for (var key of k1) {

        if (!k2.includes(key) || !objEquals(one[key], two[key])) {
            return false;
        }
    }
    return true;
}

/*
    ===============================================================================================
    Write a method flatten() can take an array of arrays and return a single array that has all the
    elements of the original arrays. You should utilize the reduce() method and the concat() method.
    ================================================================================================
*/

var container = [[1, 2, 3], [4, 5], [6]];

const flatten = (arrayOfArrays)=>{
    return arrayOfArrays.reduce((flattenedPiece, newPiece) =>
        flattenedPiece.concat(Array.isArray(newPiece) ? flatten(newPiece) : newPiece), []);
}


//tests provided with assignment
console.log("Results");
console.log(objEquals(obj, obj));
console.log(objEquals(obj, {here: 1, object: 2}));
console.log(objEquals(obj, {here: {is: "an"}, object: 2}));
console.log(objEquals(obj, {here: {is: "an"}, object: 0}));
console.log(objEquals(obj, {here: {is: "another"}, object: 2}));
console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));
console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
console.log(flatten(container));