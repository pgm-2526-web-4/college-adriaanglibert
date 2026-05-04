import gsap from "gsap";

const $moveRight = document.querySelector("[data-animation='move-right']");
const $scaleDown = document.querySelector("[data-animation='scale-down']");
const $scaleUp = document.querySelector("[data-animation='scale-up']");

export const moveRightTween = gsap.to($moveRight, {
  x: 600,
  paused: true,
});

export const scaleDownTween = gsap.to($scaleDown, {
  x: 600,
  scale: 0.5,
  paused: true,
});

export const scaleUpTween = gsap.to($scaleUp, {
  x: 600,
  scale: 1.5,
  paused: true,
});

export const fadeInTween = gsap.from("body", {
  opacity: 0,
});

export const changeBackgroundTween = gsap.to("body", {
  backgroundColor: "red",
});
