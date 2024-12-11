const logRegBtn = document.getElementById('logreg-btn');
const currentUser = sessionStorage.getItem('logedUser');
const logOut = document.getElementById('Logout');


if(!(currentUser == null))
{
    const user = document.createElement('p');
    user.innerHTML = `Welcome ${currentUser.split('@')[0]}`;
    user.style.fontSize = '20px';
    user.style.fontWeight = '600';
    user.style.marginBottom = '3px';

    const userName = document.getElementById('userName');
    logRegBtn.style.display = 'none';
    
    userName.style.display = 'block';
    document.getElementById('LogRegi').style.marginTop = '5px';
    document.getElementById('dropdown-menu').style.top = '60px';
    userName.appendChild(user);
    
    logOut.style.display = 'block';

}

logOut.addEventListener('click',()=>{
    sessionStorage.removeItem('logedUser');
    window.location.href='index.html';
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

