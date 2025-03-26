let slides = document.querySelectorAll(".slide");
let count = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

function slideImg() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });

  document.getElementById("prev").disabled = count === 0;
  document.getElementById("next").disabled = count === slides.length - 1;
}

function prevButton() {
  if (count > 0) {
    count--;
    slideImg();
  }
}

function nextButton() {
  if (count < slides.length - 1) {
    count++;
    slideImg();
  }
}

setInterval(() => {
  if (count < slides.length - 1) {
    count++;
  } else {
    count = 0;
  }
  slideImg();
}, 3000);

slideImg();
