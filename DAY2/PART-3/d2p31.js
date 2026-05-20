function loginUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("User logged in");
    },2000);
});}

// it is sthg like we  r creating a fake delay function where its showing user is logging in and we r promising it we will return the user login info after we access to it and thus creating the promise object and by using settimeout we r creating the the fake delay where itse showing it will take 2 s to resolve the matter as we dont have real database yet


async function login(){
    console.log("checking database");
    const result=await loginUser();
    console.log(result);
    console.log("login successful");
}
login();
//here await says:"Pause THIS function until promise resolves."

//promise auto creates asynchronous bhvr bt to handle it we gotta use async await jst like we use .then and .catch

