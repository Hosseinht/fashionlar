let controller;
let slideScene;

function animateSlides() {
  // Init Controller
  controller = new ScrollMagic.Controller();
  //
  const sliders = document.querySelectorAll(".slide");
  const nav = document.querySelector(".nav-header");
  //Loop over each slide
  sliders.forEach((slide) => {
    const revealImg = slide.querySelector(".reveal-img");
    const img = slide.querySelector("img");
    const revealText = slide.querySelector(".reveal-text");
    //GSAP.
    gsap.to(revealImg, 1, { x: "100%" });
    gsap.to(img, 1, { scale: 2 });
  });
}
animateSlides();
