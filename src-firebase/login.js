import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

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
const database = getDatabase(app);

// Reference to users in database
const usersRef = ref(database, "login-register");

// Login Function
function loginUser(inputEmail, inputPassword) {
  onValue(usersRef, (snapshot) => {
    let found = false;

    snapshot.forEach((childSnapshot) => {
      const user = childSnapshot.val();
      if (user.email === inputEmail && user.password === inputPassword) {
        found = true;
        alert("Login successful!");
        sessionStorage.setItem("logedUser", user.email)
        window.location.href = "index.html";
        // Perform further actions, such as redirecting to a dashboard
      }
    });

    if (!found) {
      alert("Invalid email or password!");
    }
  }, {
    onlyOnce: true // Fetch data only once to reduce load
  });
}

// Example: Form Handling
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  loginUser(email, password);
});