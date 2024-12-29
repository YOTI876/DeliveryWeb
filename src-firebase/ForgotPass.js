import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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
const database = getDatabase(app);
//reset password
const reset = document.getElementById("reset");
reset.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter a valid email address.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent successfully.");


      window.location.href = "Login.html";
    })
    .catch((error) => {
      console.error("Error sending password reset email:", error);
      alert("Failed to send password reset email. Please try again.");
    });
});

