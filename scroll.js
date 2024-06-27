window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector("#menu").style.width = "100%";
        document.querySelector("#menu").classList.add("logo");
    }
    else {
        document.querySelector("#menu").style.width = "50%";
    }
} 