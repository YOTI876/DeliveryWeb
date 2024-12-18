import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzt5l9rq682xL0tLlHZpHrvuvK6M0Vj0c",
  authDomain: "project-1-d2777.firebaseapp.com",
  projectId: "project-1-d2777",
  storageBucket: "project-1-d2777.appspot.com",
  messagingSenderId: "255017088487",
  appId: "1:255017088487:web:bb330821f2e104ff8bf942",
  measurementId: "G-G63GDMQWXB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login Function
function loginUser(inputEmail, inputPassword) {
  signInWithEmailAndPassword(auth, inputEmail, inputPassword)
    .then((userCredential) => {
      // Login successful
      const user = userCredential.user;
      alert("Login successful!");
      sessionStorage.setItem("loggedUser", user.email); // Save session
      window.location.href = "index.html"; // Redirect to the dashboard or main page
    })
    .catch((error) => {
      // Handle login errors
      console.error("Login failed:", error);
      alert("Invalid email or password!");
    });
}

// Form Handling
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  loginUser(email, password);
});
