let slides = document.querySelectorAll(".slide");
let count = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
function slideImg() {
  slides.forEach((slide) => {
    slide.style.transform = `translate(-${count * 100}%)`;
  });
}
function prev() {
  if (count > 0) {
    count--;
    slideImg();
  }
}
function next() {
  if (count < slides.length - 1) {
    count++;
    slideImg();
  }
}

setInterval(slideImg, 3000);
