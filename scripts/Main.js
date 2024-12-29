const logRegBtn = document.getElementById('logreg-btn');
const currentUser = sessionStorage.getItem('loggedUser');
const logOut = document.getElementById('Logout');

if (currentUser !== null) {
    const user = document.createElement('p');
    user.innerHTML = `Welcome ${currentUser.split('@')[0]}`; //display user name
    user.style.fontSize = '20px';
    user.style.fontWeight = '600';
    user.style.marginBottom = '3px';

    const userName = document.getElementById('userName');
    logRegBtn.style.display = 'none'; //hide log-register button
    
    userName.style.display = 'block';
    document.getElementById('LogRegi').style.marginTop = '5px';
    document.getElementById('dropdown-menu').style.top = '60px';
    userName.appendChild(user); //add user to the ui
    
    logOut.style.display = 'block'; //show logout button
}

logOut.addEventListener('click', () => {
    sessionStorage.removeItem('loggedUser'); //key name
    window.location.href = 'index.html'; 
});





//drop down
const blacklines = document.getElementById("blacklines");
const dropdown = document.querySelector(".dropdown-menu");
let isAnimating = false; // Flag for animation control

//clicking outside
blacklines.addEventListener("click", function () {
  if (isAnimating) return; //prevent double triggering
  isAnimating = true;

  dropdown.classList.toggle("show");

  
  blacklines.classList.remove("clicked");
  void blacklines.offsetWidth; 
  blacklines.classList.add("clicked");

  setTimeout(() => {
    isAnimating = false; //reset animation
  }, 600);
});

//outside the dropdown
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

//mouse down
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

//mouse leave 
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

//mouse up 
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

//mouse move
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; 
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; //scroll speed
  slider.scrollLeft = scrollLeft - walk;
});

//touch box
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
  const walk = (x - startX) * 2; //scroll speed
  slider.scrollLeft = scrollLeft - walk;
});


///////////////////////////////////////////////////////////arrow scroll
const scrollAmount = 500;
const rightArrow = document.getElementById("a-right");
const postBox = document.getElementById("post-box");
const leftArrow = document.getElementById("a-left");

//hide the left arrow
leftArrow.style.opacity = '0';

//right arrow
rightArrow.addEventListener("click", () => {
    postBox.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

//left arrow
leftArrow.addEventListener("click", () => {
    postBox.scrollBy({
        left: -scrollAmount, //scroll left
        behavior: "smooth"
    });
});

//scroll update arrow visibility
postBox.addEventListener("scroll", updateArrowVisibility);

//update arrow visibility
function updateArrowVisibility() {
    const maxScrollLeft = postBox.scrollWidth - postBox.clientWidth;
    const currentScroll = postBox.scrollLeft;

    //left arrow
    leftArrow.style.opacity = currentScroll > 0 ? '1' : '0';

    //right arrow
    rightArrow.style.opacity = currentScroll >= maxScrollLeft ? '0' : '1';
}
