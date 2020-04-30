
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
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("betisier");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds

    }

    document.getElementById("lemon").style.display = "none";
    document.getElementById("vimo").style.display = "none";
    document.getElementById("loop").style.display = "none";
    document.getElementById("betisier").style.height = "80vh";
    document.getElementById("betisier").style.display = "flex";
    document.getElementById("betisier").scrollIntoView();

}

function lemon() {
    var myIndex = 0;
    carousel2();
    document.getElementById("betisier").style.display = "none";
    document.getElementById("vimo").style.display = "none";
    document.getElementById("loop").style.display = "none";
    document.getElementById("carsat").style.display = "none";
    document.getElementById("lemon").style.height = "80vh";
    document.getElementById("lemon").style.display = "flex";
    document.getElementById("lemon").scrollIntoView();
    function carousel2() {
        var i;
        var x = document.getElementsByClassName("lemon");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel2, 2000); // Change image every 2 seconds

    }
}

function vimo() {
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("vimo");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds

    }
    document.getElementById("betisier").style.display = "none";
    document.getElementById("lemon").style.display = "none";
    document.getElementById("loop").style.display = "none";
    document.getElementById("carsat").style.display = "none";
    document.getElementById("vimo").style.height = "80vh";
    document.getElementById("vimo").style.display = "flex";
    document.getElementById("vimo").scrollIntoView();
}
function loop() {
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("wroom");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds

    }
    document.getElementById("betisier").style.display = "none";
    document.getElementById("lemon").style.display = "none";
    document.getElementById("vimo").style.display = "none";
    document.getElementById("carsat").style.display = "none";
    document.getElementById("loop").style.height = "80vh";
    document.getElementById("loop").style.display = "flex";
    document.getElementById("loop").scrollIntoView();
}

function carsat() {
    var myIndex = 0;
    carousel();
    function carousel() {
        var i;
        var x = document.getElementsByClassName("carsat");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex-1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds

    }
    document.getElementById("betisier").style.display = "none";
    document.getElementById("lemon").style.display = "none";
    document.getElementById("vimo").style.display = "none";
    document.getElementById("loop").style.display = "none";
    document.getElementById("carsat").style.height = "80vh";
    document.getElementById("carsat").style.display = "flex";
    document.getElementById("carsat").scrollIntoView();
}




