import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const provider = new GoogleAuthProvider();

// Google Login Event
document.getElementById("login-google").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user; // Get user info
      console.log("User Info:", user);
      window.location.href = "index.html";
    //   alert(`Welcome, ${user.displayName}`);
    })
    .catch((error) => {
      console.error("Error during login:", error);
      alert("Login failed. Please try again.");
    });
});