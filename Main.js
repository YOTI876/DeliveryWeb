window.addEventListener("scroll", function () {
    const transparentElement = document.querySelector(".transparent");

    // Show the transparent element when scrolling down
    if (window.scrollY > 50) { // Adjust this value as needed
        transparentElement.style.opacity = "1";
    } else {
        transparentElement.style.opacity = "0";
    }
});