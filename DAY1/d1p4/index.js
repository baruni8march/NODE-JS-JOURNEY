const fs=require("fs");
fs.writeFileSync("myfirstfile.txt","my journey to node js");
console.log("File created successfully");
const data=fs.readFileSync("myfirstfile.txt","utf-8");
 console.log(data);
console.log("File read successfully");
fs.appendFileSync("myfirstfile.txt","\n and it's been great!");
console.log("File updated successfully");
const updatedData=fs.readFileSync("myfirstfile.txt","utf-8");
console.log(updatedData);
// fs.unlinkSync("myfirstfile.txt");
// console.log("File deleted successfully");
const fs = require("fs");

fs.readFile("myfirstfile.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("End");