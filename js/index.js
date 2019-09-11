// Your code goes here

// nav - click event
let funBusNav = document.querySelector(".main-navigation");
funBusNav.addEventListener("click", event => {
  console.log("changed main nav background color to yellow");
  console.log(event.target);
  funBusNav.style.background = "yellow";
});


// bus logo - mouseover event
let busImg = document.querySelector(".home .intro img");
console.log("bus image transforms");
busImg.style.transform = "scale(1.1)";
busImg.style.transition = "transform 0.5s";

// map image - mouseenter event // nesting 
let mapImg = document.querySelector(".home .content-section .img-content");
mapImg.addEventListener("mouseover", event => {
  mapImg.style.transform = "scale(0.5)";
  mapImg.style.transition = "transform 0.5s";
  console.log("map images transforms = min");
});

// map image -  mouseleave event
mapImg.addEventListener("mouseleave", event => {
  mapImg.style.transform = "scale(1.0)";
  mapImg.style.transition = "transform 0.5s";
  console.log("map images transforms = max");
});

// logo header - resize event
window.addEventListener("resize", event => {
  let changeTitle = document.querySelector(".logo-heading");
  changeTitle.textContent = "Toni Bus";
});

// button[0] - aux click

let button = document.querySelector('.btn');
let html = document.querySelector('html');

function random(number) {
  return Math.floor(Math.random() * number);
}

function randomColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
}

button.onclick = function() {
  button.style.backgroundColor = randomColor();
};

button.onauxclick = function(e) {
  e.preventDefault();
  button.style.color = randomColor();
};

button.oncontextmenu = function(e) {
  e.preventDefault();
};

// footer - no context menu popup
noContext = document.querySelector('footer');

noContext.addEventListener('contextmenu', e => {
  e.preventDefault();
});

// page - onload 
window.onload = (event) => {
    console.log('page is fully loaded');
  };

//   Let's Go h2 to all uppercase after refresh 
let log = document.querySelector('.text-content h2').innerHTML = "LETS GOOOOOO";


// last button - date get 
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  };

// a href #  prevent default event 

let link = document.querySelector('.nav-link');
link.addEventListener('click', (event) => {
  console.log('link disabled');
  event.preventDefault();
})

// 
// stops the yellow color (nav) from logging to the console after 'click' again

funBusNav.addEventListener('click', (e) => {
  console.log(`not so fast!`);
  e.preventDefault();
});


//stop probagation 

let header = document.querySelector('header');
header.addEventListener("click", event => {
  console.log(event.target);
  alert('just header');
});

let nav = document.querySelector('nav');
nav.addEventListener("click", event => {
  console.log(event.target);
  nav.stopPropagation();
  alert('just nav');
  
});