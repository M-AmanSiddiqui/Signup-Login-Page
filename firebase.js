import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  doc,
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXM5fy65JR7jWvrXWgsr4tDMtI02ZAWrA",
  authDomain: "batch-11-f7cd9.firebaseapp.com",
  projectId: "batch-11-f7cd9",
  storageBucket: "batch-11-f7cd9.appspot.com",
  messagingSenderId: "284069445532",
  appId: "1:284069445532:web:6d6c6b82c8f3f94d5f5259"
};
// Your web app's Firebase configuration
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  db,
  doc,
  addDoc,
  collection
};
