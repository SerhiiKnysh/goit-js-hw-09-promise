import './sass/main.scss';

import colors from './js/colors-data';

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let colorIntervalId = null;

stopBtn.disabled = true;

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

startBtn.addEventListener('click', e => {
  e.target.disabled = true;
  stopBtn.disabled = false;
  if (colorIntervalId) {
    return;
  }
  colorIntervalId = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    localStorage.setItem('color', document.body.style.backgroundColor);
  }, 1000);
  console.log(colorIntervalId);
});

stopBtn.addEventListener('click', e => {
  e.target.disabled = true;
  startBtn.disabled = false;
  clearInterval(colorIntervalId);
  localStorage.setItem('color', document.body.style.backgroundColor);
  colorIntervalId = null;
});

function savedColor() {
  const savedColor = localStorage.getItem('color');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
}

savedColor();

// 2 спосіб
// const startBtn = document.querySelector('button[data-action="start"]');
// const stopBtn = document.querySelector('button[data-action="stop"]');
// let colorIntervalId = null;

// startBtn.addEventListener('click', onBtnStartClick);

// stopBtn.disabled = true;

// function onBtnStartClick(e) {
//   e.target.disabled = true;
//   stopBtn.disabled = false;

//   colorIntervalId = setInterval(
//     (min, max) => {
//       document.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
//       localStorage.setItem('color', document.body.style.backgroundColor);
//     },
//     1000,
//     0,
//     colors.length - 1,
//   );
//   startBtn.removeEventListener('click', onBtnStartClick);
//   stopBtn.addEventListener('click', onBtnStopClick);

//   console.log(colorIntervalId);
// }

// function onBtnStopClick(e) {
//   startBtn.disabled = false;
//   e.target.disabled = true;
//   clearInterval(colorIntervalId);
//   localStorage.setItem('color', document.body.style.backgroundColor);

//   stopBtn.removeEventListener('click', onBtnStopClick);
//   startBtn.addEventListener('click', onBtnStartClick);

//   console.log(colorIntervalId);
// }

// function randomIntegerFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function savedColor() {
//   const savedColor = localStorage.getItem('color');
//   if (savedColor) {
//     document.body.style.backgroundColor = savedColor;
//   }
// }

// savedColor();
