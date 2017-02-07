//String and number
var fullName = "Nimish David Mathew";
var age = 21;
var sentence = "Hello my name is " + fullName + ".\nI'll be " + (age + 1) + " years old next year";
console.log(sentence);
//Array
var list = [1, 2, 3];
console.log(list);
//Tuple
var x;
x = ["Nimish", 21, 22, "David", 23];
console.log(x);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
var colorName = Color[2];
console.log(c, ": ", colorName);
//Any
var notSure = 4;
console.log(notSure);
notSure = "Nimish";
console.log(notSure);
notSure = false;
console.log(notSure);
//Spread
var first = [1, 2];
var second = [3, 4];
var both = [0].concat(first, second, [5]);
console.log(both);
