const logRegBtn = document.getElementById('logreg-btn');
const currentUser = sessionStorage.getItem('loggedUser'); // Fixed the key name
const logOut = document.getElementById('Logout');

if (currentUser !== null) {
    const user = document.createElement('p');
    user.innerHTML = `Welcome ${currentUser.split('@')[0]}`; // Display the user's name
    user.style.fontSize = '20px';
    user.style.fontWeight = '600';
    user.style.marginBottom = '3px';

    const userName = document.getElementById('userName');
    logRegBtn.style.display = 'none'; // Hide log/register button
    
    userName.style.display = 'block';
    document.getElementById('LogRegi').style.marginTop = '5px';
    document.getElementById('dropdown-menu').style.top = '60px';
    userName.appendChild(user); // Add the user element to the UI
    
    logOut.style.display = 'block'; // Show the logout button
}

logOut.addEventListener('click', () => {
    sessionStorage.removeItem('loggedUser'); // Correct the key name
    window.location.href = 'index.html'; // Redirect to the home page
});



document.getElementById("blacklines").addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown-menu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

// Optional: Close the menu when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown-menu");
  const blacklines = document.getElementById("blacklines");

  if (!blacklines.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = "none";
  }
});

let isAnimating = false; 
const blacklines = document.getElementById("blacklines");
const dropdown = document.querySelector(".dropdown-menu");

blacklines.addEventListener("click", function () {

    if (isAnimating) return;
    isAnimating = true;

  dropdown.classList.toggle("show");

  blacklines.classList.remove("clicked");

  void blacklines.offsetWidth;  

  blacklines.classList.add("clicked");

  setTimeout(function () {
    isAnimating = false;  // Allow the animation to be triggered again
  }, 600);
});


//Close menu when clicking outside
document.addEventListener("click", function (event) {
  if (!blacklines.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});


/////////////////////////////////////////////////////////////Scroll events

const slider = document.querySelector('.post-box');

let isDown = false;
let startX;
let scrollLeft;

// Mouse down event to start dragging
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

// Mouse leave event to stop dragging
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse up event to stop dragging
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

// Mouse move event to scroll during dragging
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Exit if not dragging
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

// Touch events
slider.addEventListener("touchstart", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("touchend", () => {
  isDown = false;
  slider.classList.remove("active");
});

slider.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed
  slider.scrollLeft = scrollLeft - walk;
});


///////////////////////////////////////////////////////////arrow scroll
const scrollAmount = 500;
const rightArrow = document.getElementById("a-right");
const postBox = document.getElementById("post-box");
const leftArrow = document.getElementById("a-left");

// Initially hide the left arrow
leftArrow.style.opacity = '0';

// Event listener for the right arrow
rightArrow.addEventListener("click", () => {
    postBox.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

// Event listener for the left arrow
leftArrow.addEventListener("click", () => {
    postBox.scrollBy({
        left: -scrollAmount, // Scroll to the left
        behavior: "smooth"
    });
});

// Scroll event listener to update arrow visibility
postBox.addEventListener("scroll", updateArrowVisibility);

// Function to update arrow visibility dynamically
function updateArrowVisibility() {
    const maxScrollLeft = postBox.scrollWidth - postBox.clientWidth;
    const currentScroll = postBox.scrollLeft;

    // Show or hide the left arrow
    leftArrow.style.opacity = currentScroll > 0 ? '1' : '0';

    // Show or hide the right arrow
    rightArrow.style.opacity = currentScroll >= maxScrollLeft ? '0' : '1';
}
