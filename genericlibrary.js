/* Part 1 : Generic Identity Function
This is a simple identity function that takes an argument
of type T and returns a value of type T.

The outputs below for output and output 2 are

Hello
1
*/
function identity(arg) {
    return arg;
}
var output = identity("Hello");
console.log(output); //Output: Hello
var output2 = identity(1);
console.log(output2); // Output: 1
/* Part 2: Generic Array Reversal Function
This is a simple function that takes in an array of elements
and returns the array with the elements in reverse order

The output for the reverseArray is [5,4,3,2,1]
*/
function reverseArray(array) {
    return array.reverse();
}
var numbers = [1, 2, 3, 4, 5];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers); // Output: [5,4,3,2,1]
var numeric = /** @class */ (function () {
    function numeric() {
        this.value = {};
    }
    numeric.prototype.getItem = function (key) {
        return this.value[key];
    };
    numeric.prototype.setItem = function (key, item) {
        this.value[key] = item;
    };
    return numeric;
}());
var alpha = /** @class */ (function () {
    function alpha() {
        this.value = {};
    }
    alpha.prototype.getItem = function (key) {
        return this.value[key];
    };
    alpha.prototype.setItem = function (key, item) {
        this.value[key] = item;
    };
    return alpha;
}());
function mapObject(key, value, newValue) {
    var buf = newValue;
    var retrieved = value.getItem(key);
    buf.setItem(key, retrieved);
    newValue = buf;
    return newValue;
}
var key = "14";
var k = new numeric();
var v = new alpha();
k.setItem(key, 23);
var nv = mapObject(key, k, v);
console.log("Original class value for key ".concat(key, " is ").concat(v.getItem(key)));
console.log("Value in new class object for key ".concat(key, " is ").concat(nv.getItem(key)));
/*Part 4: Generic Filtering Function
This function takes in an array of elements and will
divide the array by 2 and will only return those who have a remainder of 0.
*/
var numberOne = [1, 2, 3, 4, 5, 6];
function filterArray(array) {
    var newFilter = array.filter(function (x) { return x % 2 === 0; });
    console.log(newFilter);
}
filterArray(numberOne);
// Output: [2, 4, 6]
