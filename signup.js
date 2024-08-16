import { auth, createUserWithEmailAndPassword, doc } from "./firebase.js";
import { db,collection, addDoc } from "./firebase.js";

const signup =  () => {
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let userData = {
    name: name.value,
    phone: phone.value,
    address: address.value,
    email: email.value,
    password: password.value,
  };

 createUserWithEmailAndPassword(auth, email.value, password.value)
.then(async(res) => {
  userData.uid = res.user.uid;
  console.log("user", res.user);
  console.log("userData", userData);
await addDoc(collection(db,"users"), userData);
alert("Signup Succesfully");
  })
  .catch((error) => {
      console.log("error",error.code);
      
  });
}

let signupbtn = document.getElementById("signup");
signupbtn.addEventListener("click", signup);


// Sir ka code

// const signup =  async () => {
//   let name = document.getElementById("name");
//   let phone = document.getElementById("phone");
//   let address = document.getElementById("address");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");
//   let userData = {
//     name: name.value,
//     phone: phone.value,
//     address: address.value,
//     email: email.value,
//     password: password.value,
//   };
//   try {
//     let userCredential =  await   createUserWithEmailAndPassword(auth, email.value, password.value)
  
//      let user = userCredential.user
//      userData.uid = user.uid;
//       await addDoc(collection(db, "users"),{
//         name: name.value,
//         phone: phone.value,
//         address: address.value,
//         email:email.value,
//         password:password.value
//       });
      
    
//     }
//     catch(error) {
      
//       alert("Signup Successfully", error.code);
      
//     };
// };

// let signupbtn = document.getElementById("signup");
// signupbtn.addEventListener("click", signup);
