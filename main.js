let red = 100
let green = 100
let blue = 100

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

// window.addEventListener('keydown', (e) => {  
//   if (e.keyCode === 38 && red <= 256) {
//     red += 3;
//     blue += 3;
//     green += 3;
//   } else if (e.keyCode === 40 && red >= 0) {
//     red -= 3;
//     blue -= 3;
//     green -= 3;
//   }
//   document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
//   console.log(red);
// })

//------------SWITCH wersion1--------------

// window.addEventListener('keydown', (e) => { 
//   switch (e.keyCode) {
//     case 38:
//       document.body.style.backgroundColor = `rgb(${red <= 255 ? red++ : red},${green <= 255 ? green++ : green},${blue <= 255 ? blue++ : blue})`;
//       break
//     case 40:
//       document.body.style.backgroundColor = `rgb(${red >=0 ? red-- : red},${green >=0 ? green-- : green},${blue >=0 ? blue-- : blue})`;
//       break
//   }
// })

//------------SWITCH wersion2--------------
window.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38:
      red <= 255 ? red++ : red;
      blue <= 255 ? blue++ : blue;
      green <= 255 ? green++ : green;
      break
    case 40:
      red >= 0 ? red-- : red;
      blue >= 0 ? blue-- : blue;
      green >= 0 ? green-- : green;
      break
  }
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  console.log(red, green, blue)
})