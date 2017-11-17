const inputElement = document.querySelector('input');
const reader = new FileReader();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const img = document.createElement('img');
const zoom = document.querySelector('#zoom');
const leftRight = document.querySelector('#leftRight');
const upDown = document.querySelector('#upDown')

//muuttujat koordinaatteja varten
 let x = 0;
 let y = 0;
 let originalWidth = 200;
 let originalHeight = 200;
 let width = 0;
 let height = 0;

inputElement.addEventListener('change', (evt) => {
  const file = inputElement.files[0];
reader.readAsDataURL(file);
});

reader.addEventListener('load', (evt) => {
  img.src = reader.result;
});

img.addEventListener('load', (evt) => {
  ctx.drawImage(img, 0, 0, originalWidth, originalHeight);
  originalWidth = originalHeight * img.width / img.height;

});

zoom.addEventListener('input', (evt) => {
  width = originalWidth * zoom.value;
  height = originalHeight * zoom.value;
  redraw();


});

leftRight.addEventListener('input', (evt) => {
  x = leftRight.value;
  redraw();

});

upDown.addEventListener('input', (evt) => {
  y = upDown.value;
  redraw();

});



//tätä kutsutaan, kun liukusäätimiä (range) muutetaan
const redraw = () => {

  ctx.clearRect(img, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, x, y, width, height);

};


