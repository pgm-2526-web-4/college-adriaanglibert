import gsap from "gsap";

const $ball = document.querySelector("[data-animation=mouse]");

const mouseTl = gsap.timeline({
  paused: true,
});

mouseTl
  .to($ball, {
    scale: 0,
    duration: 0.15,
  })
  .to($ball, {
    autoAlpha: 0,
  });

const quickToX = gsap.quickTo($ball, "x");
const quickToY = gsap.quickTo($ball, "y");

export const initMouseAnimation = () => {
  document.addEventListener(
    "mousemove",
    () => {
      gsap.to($ball, {
        autoAlpha: 1,
      });
    },
    {
      once: true,
    },
  );

  document.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;

    quickToX(clientX);
    quickToY(clientY);
  });

  document.addEventListener("mouseleave", () => {
    mouseTl.play();
  });

  // Balletje weer tevoorschijn komen wanneer het weer in het scherm gaat.
  document.addEventListener("mouseenter", () => {
    mouseTl.reverse();
  });
};
