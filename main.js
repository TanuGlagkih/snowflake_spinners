let btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', function () {
  let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
});

class Snow {
  constructor() {
    this.startTime = 0,
      this.rAF,
      this.rotateCount
  }
}

var spinner = [];

for (let j = 0; j < 5; j++) {
  spinner[j] = document.createElement('div');
  spinner[j].setAttribute('id', [j]);
  spinner[j].innerHTML = '❆';
  document.body.appendChild(spinner[j]);
  spinner[j] = new Snow();
}

document.body.addEventListener('click', (event) => {
  var i = event.target.getAttribute('id');
  parseInt(i);
  if (event.target.classList.contains('move')) {
    cancelAnimationFrame(spinner[i].rAF);
    spinner[i].rotateCount = 0;
    event.target.classList.remove('move');
  } else {
    function draw(timestamp) {
      if (!spinner[i].startTime) {
        spinner[i].startTime = timestamp;
      }
      spinner[i].rotateCount = (timestamp - spinner[i].startTime) / 6;
      if (spinner[i].rotateCount > 359) {
        spinner[i].rotateCount %= 360;
      }
      event.target.style.transform = `rotate(${spinner[i].rotateCount}deg)`;
      spinner[i].rAF = requestAnimationFrame(draw);
      event.target.classList.add('move');
    }
    draw();
  }
});