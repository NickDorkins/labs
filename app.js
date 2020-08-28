'use strict';

var imgArray = [];

var imgElOne = document.getElementById('image-one');
var imgElTwo = document.getElementById('image-two');
var imgElThree = document.getElementById('image-three');

var clicksAlotted = 25;
var userClicks = 0;
var renderArray = [];

var results = document.getElementById('results');

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


console.log(imgArray);

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function createRenderArray() {
  while (renderArray.length > 0) {
    renderArray.pop();
  }
  while (renderArray.length < 3) {
    var i = randomNumber(imgArray.length);
    while (renderArray.includes(i)) {
      i = randomNumber(imgArray.length);
    }
    renderArray.push(i);
  }
  console.log(renderArray);
}

function renderImages() {
  createRenderArray();
  var imgOne = imgArray[renderArray[0]];
  var imgTwo = imgArray[renderArray[1]];
  var imgThree = imgArray[renderArray[2]];

  imgElOne.alt = imgOne.name;
  imgElOne.src = imgOne.src;

  imgElTwo.alt = imgTwo.name;
  imgElTwo.src = imgTwo.src;

  imgElThree.alt = imgThree.name;
  imgElThree.src = imgThree.src;

  imgOne.viewed++;
  imgTwo.viewed++;
  imgThree.viewed++;
}

function eventHandler(e) {
  console.log(e.target.alt);
  userClicks++;


  for (var i = 0; i < imgArray.length; i++) {
    if (imgArray[i].name === e.target.alt) {
      imgArray[i].clicked++;
    }
  }
  renderImages();

  if (userClicks === clicksAlotted) {
    imgElOne.removeEventListener('click', eventHandler);
    imgElTwo.removeEventListener('click', eventHandler);
    imgElThree.removeEventListener('click', eventHandler);

    for (i = 0; i < imgArray.length; i++) {
      var imageClickedAmount = document.createElement('p');
      imageClickedAmount.textContent = `${imgArray[i].name}, clicked ${imgArray[i].clicked} times, viewed ${imgArray[i].viewed} times.`;
      results.append(imageClickedAmount);
    }
  }
}

function renderChart() {
  var clicksArray = [];
  var viewedArray = [];
  var imageArray = [];

  for (var i = 0; i < imgArray.length; i++){
    clicksArray.push(imgArray[i].clicked);
    viewedArray.push(imgArray[i].viewed);
    imageArray.push(imgArray[i].name);
  }

  var chartObject = {
    type: 'horizontalBar',
    data: {
      labels: imageArray,
      datasets: [{
        label: '# of Votes',
        data: clicksArray,
        backgroundColor: [
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

          'rgba(255, 159, 64, 1)'
        ],
        hoverBackgroundColor: 'teal',
        borderWidth: 1
      }, {
        label: '# of Views',
        data: viewedArray,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(150, 206, 15, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(100, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',

          'rgba(255, 159, 64, 1)'
        ],
        hoverBackgroundColor: 'pink',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      responsive: false,
    }
  };

  var ctx = document.getElementById('myChart').getContext('2d');

  var myChart = new Chart(ctx, chartObject); //eslint-disable-line
}

imgElOne.addEventListener('click', eventHandler);
imgElTwo.addEventListener('click', eventHandler);
imgElThree.addEventListener('click', eventHandler);

renderImages();
renderChart();


