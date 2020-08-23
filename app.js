'use strict';

console.log('hello World');

var imgArray = [];
var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');

// create Pictures

function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);
}


new Picture('R2D2', './img/bag.jpg');
new Picture('', './img/banana.jpg');
new Picture('', './img/bathroom.jpg');
new Picture('', './img/boots.jpg');
new Picture('', './img/breakfast.jpg');
new Picture('', './img/bubblegum.jpg');
new Picture('', './img/chair.jpg');
new Picture('', './img/cthulhu.jpg');
new Picture('', './img/dog-duck.jpg');
new Picture('', './img/dragon.jpg');
new Picture('', './img/pen.jpg');
new Picture('', './img/pet-sweep.jpg');
new Picture('', './img/scissors.jpg');
new Picture('', './img/shark.jpg');
new Picture('', './img/sweep.png');
new Picture('', './img/tauntaun.jpg');
new Picture('', './img/unicorn.jpg');
new Picture('', './img/usb.jpg');
new Picture('', './img/water-can.jpg');
new Picture('', './img/wine-glass.jpg');
// new Picture('', './img/.jpg');
// new Picture('', './img/.jpg');
// new Picture('', './img/.jpg');
// new Picture('', './img/.jpg');
// new Picture('', './img/.jpg');




console.log(imgArray);

function renderImages() {
  // DOM manipulation fill element with content
  var imgOne = imgArray[randomNumber(imgArray.length)];
  var imgTwo = imgArray[randomNumber(imgArray.length)];

  while(imgOne === imgTwo) {
    imgTwo = imgArray[randomNumber(imgArray.length)];
  }

  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;

  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;

  imgOne.viewed++;
  imgTwo.viewed++;
}

console.log(imgArray);

function randomNumber(max) {
  return Math.floor(Math.random() * max); //excludes 7 becuase the array starts at 0 and goes through 6
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);

// imgElOne.removeEventListener

// Incriments Click of images
function eventHandler(e) {
  console.log(e.target.alt);
  for (var i =0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
      renderImages();
    }
  }
}

