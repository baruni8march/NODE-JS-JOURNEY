// const pool=require("../PART1/database");

// function testPromise(){
//     const result=pool.query("SELECT * FROM todos");
//     console.log(result);
// }

// testPromise();

//output: Promise { <pending> }

const pool=require("../PART1/database");
async function testAwait(){
    const res=await pool.query("SELECT * FROM todos");
    console.log(res.rows);
}
testAwait();
//output:
/*
Todos table ready
[
  { id: 1, title: 'dance', completed: false },
  { id: 3, title: 'reciting', completed: true }
]
 */
async function hello(){
    return "hello";
}
//console.log(hello());
//output:Promise { 'hello' }

//>>>>>every async function return promise<<<<

async function run(){
    const res=await hello();
    console.log(res);
}
run();
//output:hello

//>>>await opens the Promise and gives the real value.<<<
