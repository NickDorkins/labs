'use strict';

var imgArray = [];

var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');

// create Pictures

function Picture(name, src) {
  this.viewed = 0;
  this.clicked = 0;
  this.src = src;
  this.name = name;

  imgArray.push(this);
}

new Picture('R2D2 suitcase', './img/bag.jpg');
new Picture('Banana Cutter', './img/banana.jpg');
new Picture('tablet tp holder', './img/bathroom.jpg');
new Picture('open toe rainboots', './img/boots.jpg');
new Picture('all in one breakfast toaster', './img/breakfast.jpg');
new Picture('meatball gum balls', './img/bubblegum.jpg');
new Picture('domed seat chair', './img/chair.jpg');
new Picture('cthulhu holding explorer', './img/cthulhu.jpg');
new Picture('duck bill muzzle', './img/dog-duck.jpg');
new Picture('canned dragon meat', './img/dragon.jpg');
new Picture('utensil pen caps', './img/pen.jpg');
new Picture('dog sweep shoes', './img/pet-sweep.jpg');
new Picture('pizza scissors/server', './img/scissors.jpg');
new Picture('shark eating human sleeping bag', './img/shark.jpg');
new Picture('baby sweeper onesie', './img/sweep.png');
new Picture('star wars tauntaun carcas sleeping bag', './img/tauntaun.jpg');
new Picture('canned unicorn meat', './img/unicorn.jpg');
new Picture('moving tenticle usb', './img/usb.gif');
new Picture('self filling watering can', './img/water-can.jpg');
new Picture('worst wine glass ever', './img/wine-glass.jpg');
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
  var imgThree = imgArray[randomNumber(imgArray.length)];

  while(imgOne === imgTwo) {
    imgTwo = imgArray[randomNumber(imgArray.length)];
  }

  imgElOne.src = imgOne.src;
  imgElTwo.src = imgTwo.src;
  imgElThree.src = imgThree.src;

  imgElOne.alt = imgOne.name;
  imgElTwo.alt = imgTwo.name;
  imgElThree.alt = imgThree.name;

  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;

  console.log('IMAGE ARRAY', imgArray);
}


function randomNumber(max) {
  console.log('in rando number');
  return Math.floor(Math.random() * max); //excludes 7 becuase the array starts at 0 and goes through 6
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler);

// imgElOne.removeEventListener

// Incriments Click of images
function eventHandler(e) {
  console.log('INSIDE EVENT HANDLER', e.target.alt);
  for (var i = 0; i < imgArray.length; i++) {
    console.log('INSIDE FOR LOOP', imgArray[i]);
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
      renderImages();
    }
  }
}

renderImages();

