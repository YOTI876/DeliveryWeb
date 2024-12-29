import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const auth = getAuth(app);
const form = document.getElementById("form");


const checkbox = document.getElementById("checkbox");
const regiButton = document.getElementById("Button-register");

regiButton.disabled = true;
checkbox.addEventListener("change", () => {
  regiButton.disabled = !checkbox.checked;
});

//firebase authentication
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      //Successfull
      const user = userCredential.user;
      console.log("User registered successfully:", user);

      alert("Registration successful!");
      form.reset();

      //redirect
      setTimeout(() => {
        window.location.href = "Login.html";
      }, 500);
    })
    .catch((error) => {
      
      console.error("Error during registration:", error.message);
      alert(`Registration failed: ${error.message}`);
    });
});