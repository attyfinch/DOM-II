import './less/index.less'

// Your code goes here!

let all = document.querySelector('body');
let mainImage = document.querySelector('header img');
let headline = document.querySelector('h1');

// #1 highlight text w/ mouseover
let bodyText = document.querySelectorAll('p');

function hightlight(event) {
    event.target.style.backgroundColor = 'lightgray'
};

for (let i = 0; i <= bodyText.length-1; i++) {
    bodyText[i].addEventListener('mouseover', hightlight)
};

// #2 unhighlight text w/ mouseleave
function unhightlight(event) {
    event.target.style.backgroundColor = 'white'
};

for (let i = 0; i <= bodyText.length-1; i++) {
    bodyText[i].addEventListener('mouseleave', unhightlight)
};

// #3 fire an alert everytime the page loads w/ load
window.addEventListener("load", (event) => {
    alert("Welcome to this webpage!!");
  });

// #4 make top image opaque w/ dblclick

mainImage.addEventListener('dblclick', (event) => {
    event.target.style.opacity = '.5'
});

mainImage.addEventListener('click', (event) => {
    event.target.style.opacity = '1'
});

// #5 logging keyboard strokes w/ keydown

let keyboardStrokes = '';

document.addEventListener('keydown', (event) => {
    keyboardStrokes += event.key;
})

document.addEventListener('keydown', (event) => {
    if (event.key == 9) {
        console.log(keyboardStrokes);
    }
})

// #6 resize top image w/ wheel

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('img');
  el.onwheel = zoom;
  
// #7 logs when user coopies something on the doc w/ copy

all.addEventListener('copy', (event) => { 
    console.log(event);
});

// #8 and #9 blur and focus

const inputBox = document.createElement('input')
const header = document.querySelector('header'); 
header.appendChild(inputBox);

inputBox.addEventListener('focus', (event) => {
    event.target.style.backgroundColor = 'pink'
});

inputBox.addEventListener('blur', (event) => {
    event.target.style.backgroundColor = ''
});

// #10 Scroll

// document.addEventListener("scroll", (event) => {
//     console.log(event)
// });

// playing around with event handlers.

document.onscroll = (event) => { console.log(event)};





