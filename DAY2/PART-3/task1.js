const { get } = require("node:http");

function fetchUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User data fetched");
        },2000);
    });
}
async function getUser(){
    console.log("User data fetching...")
    const res=await fetchUser();
    console.log(res);
    console.log("Done");
}
getUser();