function processPayment(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Payment processed");
        },3000);

    });
}
async function buyProduct(){
    console.log("Processing payment...");
    const res=await processPayment();
    console.log(res);
    console.log("Product bought");
}
buyProduct();