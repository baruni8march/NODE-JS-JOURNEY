//ouput: A>C>B
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");