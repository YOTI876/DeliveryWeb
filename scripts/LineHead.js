//black line
window.addEventListener("scroll", function () {
    const transparentElement = document.querySelector(".transparent");

    //show
    if (window.scrollY > 50) {
        transparentElement.style.opacity = "1";
    } else {
        transparentElement.style.opacity = "0";
    }
});




