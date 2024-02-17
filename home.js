let currentSlide = 0;
//created two objects: slides and dots
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

//init() is a named function
//function() is an anonymous (self-invoking) funtion (function without name)
//alternatively you can use arrow funtion to make the code lighter
function init(n) {
    slides.forEach(function (slide, index) {
            slide.style.display = "none"; //Element will not be displayed
            dots.forEach(function (dot, index) {
                    dot.classList.remove("active");//remove "active" from the CSS classnames
                });
        });
    slides[n].style.display = "block"; //Element is rendered as a block-level element
    dots[n].classList.add("active"); //add "active" to the CSS classnames
}

//The DOMContentLoaded fires when the DOM content is loaded, 
//without waiting for images and stylesheets to finish loading.
document.addEventListener("DOMContentLoaded", init(currentSlide))

function next() {
    if(currentSlide >= slides.length - 1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    //alternatively you can use conditional (ternary) operator
    //currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++;
    init(currentSlide);
}

function prev() {
    if(currentSlide <= 0){
        currentSlide = slides.length - 1;
    }else{
        currentSlide--;
    }
    //alternatively you can use conditional (ternary) operator
    //currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--;
    init(currentSlide);
}

//click event. When you click the slides move 
document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)

//Timing Events. The setInterval() method repeats a given function at every given time-interval.
setInterval(next, 5000);

dots.forEach(function (dot, i) {
        dot.addEventListener("click", function () {
            console.log(currentSlide);
            init(i);
            currentSlide = i;
        });
    })


/* Script for the login button to direct the user to Login screen */
    document.querySelector('.btnLogin-popup').addEventListener('click', function() {
        window.location.href = "./login.html";
    });