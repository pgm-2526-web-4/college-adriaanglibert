import gsap from "gsap";
import "./style.css";

// Animatie via GSAP
// 4 opties!

// 1. Je kan **naar** een toestand animeren.
// Bestaat uit selector (welke elementen animeer ik?) en uit properties die je animeert.
// Speciaal aan selector? Je kan 1, maar ook meerdere elementen selecteren.
const rotateMoveTween = gsap.to("[data-animation=box]", {
  rotate: "360deg",
  x: 200,
  y: 100,
  stagger: 0.1,
  paused: true,
});

// 2. Je kan ook **van** een toestand animeren.
const fadeInUpTween = gsap.from("[data-animation=box]", {
  opacity: 0,
  y: 100,
  stagger: 0.1,
});

// 3. Je kan expliciet **van** **naar** een toestand animeren. Hier heb je 3 argumenten, de selector en de twee states.
const moveRightTween = gsap.fromTo(
  "[data-animation=box]",
  {
    x: 0,
  },
  {
    x: 200,
    paused: true,
  },
);

// 4. Tween kan ook gewoon niet animeren, maar een waarde onmiddellijk instellen.
gsap.set("[data-animation=box]", {
  backgroundColor: "red",
});
