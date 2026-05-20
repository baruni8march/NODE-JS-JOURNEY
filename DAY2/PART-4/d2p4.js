const fs = require("fs");

function loginUser(username, pass) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (username === "admin" && pass === "1234") {
            resolve("Login successful");
         } else {
            reject("Invalid credentials");
         }
      }, 2000);
   });
}

async function startLogin() {
   console.log("Checking credentials...");

   try {
     // const result = await loginUser("admin", "1234");
      const result=await loginUser("admin", "wrongpass");
      console.log(result);

      fs.appendFileSync("d2p4text.txt", "\nLogin successful");

      console.log("Success log saved");
   } catch (err) {
      console.log(err);

      fs.appendFileSync("d2p4text.txt", "\nLogin failed");

      console.log("Failed log saved");
   }
}

startLogin();