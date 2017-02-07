//String and number
let fullName: string = "Nimish David Mathew";
let age: number = 21;
let sentence: string = `Hello my name is ${fullName}.
I'll be ${age+1} years old next year`;
console.log(sentence);

//Array
let list: number[] = [1, 2, 3]
console.log(list);

//Tuple
let x: [string,number];
x = ["Nimish", 21, 22, "David", 23];
console.log(x);

//Enum
enum Color { Red, Green, Blue };
let c: Color = Color.Blue;
let colorName: string = Color[2];
console.log(c,": ",colorName);

//Any
let notSure: any = 4;
console.log(notSure);
notSure = "Nimish";
console.log(notSure);
notSure = false;
console.log(notSure);

//Spread
let first = [1,2];
let second = [3,4];
let both = [0, ...first, ...second, 5];
console.log(both);
