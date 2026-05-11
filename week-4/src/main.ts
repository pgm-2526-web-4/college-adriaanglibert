import gsap from "gsap";
import { initHorizontalScroll } from "./animations/horizontal";
import { fadeInTween, rotateOnScroll } from "./animations/scroll";
import "./style.css";
import { initMouseAnimation } from "./animations/mouse";

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  initHorizontalScroll();
}).add("(pointer: fine)", () => {
  const mouseTl = gsap.timeline();
  mouseTl
    .set("[data-animation=mouse]", {
      autoAlpha: 0,
    })
    .add(initMouseAnimation());
});

fadeInTween();
rotateOnScroll();
