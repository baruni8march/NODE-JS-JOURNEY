const _=require("lodash");
const names=["Alice","Bob","Charlie"];
console.log(_.reverse(names));
console.log(_.shuffle(names));
console.log(_.sample(names));
//This returns:ONE random item
console.log(_.join(names,"-"));
console.log(_.capitalize("hello world"));
console.log(_.camelCase("hello world"));
console.log(_.kebabCase("hello world"));
console.log(_.snakeCase("hello world"));
console.log(_.uniq([1,2,2,3,4,4,5]));
console.log(_.flatten([1,[2,3],4,[5,6]]));