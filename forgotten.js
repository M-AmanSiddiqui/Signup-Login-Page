import { auth, sendPasswordResetEmail } from "./firebase.js";
let email = document.getElementById("email");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  sendPasswordResetEmail(auth, email.value)
    .then(() => {
      alert("Sorry!Please enter your correct email");
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert("Please check your email");
    });
});
