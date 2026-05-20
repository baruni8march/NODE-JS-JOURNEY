const pi=3.1416;
// module.exports=pi;
//when u export multiple things the one at the last executes as it overwrites the previous ones
function add(a,b){
    return a+b;
}
// module.exports=add;
function sub(a,b){
    return a-b;
}
module.exports={
    pi,
    add,
    sub

};