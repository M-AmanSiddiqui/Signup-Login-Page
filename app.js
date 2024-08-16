import { auth, signInWithEmailAndPassword } from "./firebase.js";
let login = () => {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      console.log("User", res.user);
      alert("Login Successfully");
    })
    .catch((error) => {
      console.log("error", error.code);
      alert("Please enter your correct email and password");
    });
};
let loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", login);
