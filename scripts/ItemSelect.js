const items = document.getElementsByClassName('item');
const infos = document.getElementsByClassName('info');

Array.from(items).forEach((item, index) => {
    const info = infos[index]; 
    if (!info) return; 

    //hide the info if the item text is not kfc
    if (item.innerText !== 'KFC') {
       info.style.display = 'none'; 
    }

    
    item.addEventListener('click', () => {
        Array.from(infos).forEach(info => {
            info.style.display = 'none';
        });
        info.style.display = 'flex';
    });
});

//red nuber on cart
const itemsInCart = document.getElementById("badge");
itemsInCart.style.display = "none";
const addCart = document.getElementById("addToCart");

addCart.addEventListener('click', ()=>{
    itemsInCart.style.display = "block";
    
    if(itemsInCart.innerHTML >= 9)
    {
        
    }
    else
    {
        itemsInCart.innerHTML = parseInt(itemsInCart.innerHTML) + 1;
    }
});

/////////////////////////////////////////////////////////////////////////////// Drop-down Cart
document.getElementById("Cart").addEventListener("click", function (event) {
    const dropdownCart = document.getElementById("dropdown-menu-cart");
    const dropdown = document.querySelector(".dropdown-menu"); 

    
    dropdown.classList.remove("show");

    
    dropdownCart.classList.toggle("show");

    
    event.stopPropagation();
});

/////////////////////////////////////////////////////////////////////////////// Drop-down 3-lines
const blacklines = document.getElementById("blacklines");
const dropdown = document.querySelector(".dropdown-menu");
let isAnimating = false; // Flag for animation control

blacklines.addEventListener("click", function (event) {
    if (isAnimating) return;
    isAnimating = true;

    const dropdownCart = document.getElementById("dropdown-menu-cart");
    dropdownCart.classList.remove("show"); //close cart menu if open

    // Toggle 3-lines menu
    dropdown.classList.toggle("show");

    // Animation effect for 'clicked' state
    blacklines.classList.remove("clicked");
    void blacklines.offsetWidth; // Forces reflow for animation restart
    blacklines.classList.add("clicked");

    setTimeout(() => {
        isAnimating = false; 
    }, 600);

   
    event.stopPropagation();
});

//close both dropdowns outside
document.addEventListener("click", function (event) {
    const dropdownCart = document.getElementById("dropdown-menu-cart");
    const cart = document.getElementById("Cart");

    if (
        !dropdown.contains(event.target) && 
        !blacklines.contains(event.target)
    ) {
        dropdown.classList.remove("show");
    }

    if (
        !dropdownCart.contains(event.target) && 
        !cart.contains(event.target)
    ) {
        dropdownCart.classList.remove("show");
    }
});
