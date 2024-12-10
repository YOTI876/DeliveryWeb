import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzt5l9rq682xL0tLlHZpHrvuvK6M0Vj0c",
  authDomain: "project-1-d2777.firebaseapp.com",
  projectId: "project-1-d2777",
  storageBucket: "project-1-d2777.appspot.com",
  messagingSenderId: "255017088487",
  appId: "1:255017088487:web:bb330821f2e104ff8bf942",
  measurementId: "G-G63GDMQWXB",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const form = document.getElementById("form");

//checkbox if checked
const checkbox = document.getElementById("checkbox");
const regiButton = document.getElementById("Button-register");
const terms = document.getElementById("terms");

regiButton.disabled = true;

checkbox.addEventListener("change", ()=>{
    regiButton.disabled = !checkbox.checked;
});

//firebase
form.addEventListener("submit", (e) => {
  e.preventDefault();


  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const newClientRef = push(ref(database, "login-register"));

  set(newClientRef, {
    email: email,
    password: password
  });

  form.reset();
  setTimeout(()=>{
    window.location.href = "Login.html";
  },500);
});
