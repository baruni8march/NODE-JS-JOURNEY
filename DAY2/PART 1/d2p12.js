const promise=new Promise((resolve,reject)=>{
   let success=true;
   //let success=false;
   if(success){
    resolve("Success");
   }
   else{
    reject("Failure");
   }

});
promise
    .then((data)=>{console.log(data);})
    .catch((err)=>{console.log(err);});