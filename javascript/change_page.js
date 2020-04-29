// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
function betisier() {
    document.getElementById("lemon").style.visibility = "hidden";
    document.getElementById("lemon").style.height = "0";
    document.getElementById("betisier").style.height = "90vh";
    document.getElementById("betisier").style.visibility = "visible";
    document.getElementById("betisier").scrollIntoView();
}

function lemon() {
    document.getElementById("betisier").style.visibility = "hidden";
    document.getElementById("betisier").style.height = "0";
    document.getElementById("lemon").style.height = "90vh";
    document.getElementById("lemon").style.visibility = "visible";
    document.getElementById("lemon").scrollIntoView();
}