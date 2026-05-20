//module and require():
//its impossible to manage entire backend in one file so we use modules to split our code into multiple files and import them when needed
//thats how real backend apps are built
//in order to import a module we use require() function
//from the file d1p2math.js:
// const pival=require("./d1p2math");
// console.log(pival);
const math=require("./d1p2math");
console.log(math.pi);
console.log(math.add(2,3));
console.log(math.sub(8,2));