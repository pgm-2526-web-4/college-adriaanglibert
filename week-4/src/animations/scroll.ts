import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const $fadeInOnScrollElements = document.querySelectorAll(
  "[data-animation='fade-in-on-scroll']",
);

// Techniek 1: ScrollTrigger in de Tween zelf.
export const fadeInTween = () => {
  $fadeInOnScrollElements.forEach(($fadeInOnScrollElement) =>
    gsap.from($fadeInOnScrollElement, {
      opacity: 0,
      duration: 0.25,
      scrollTrigger: {
        trigger: $fadeInOnScrollElement,
        start: "top 90%",
        end: "top 10%",
        markers: false,
        toggleActions: "play reverse restart reverse",
      },
    }),
  );
};

// Techniek 2: ScrollTrigger Afzonderlijk
const rotateTween = () =>
  gsap.to($fadeInOnScrollElements, {
    rotate: 90,
  });

export const rotateOnScroll = () => {
  ScrollTrigger.create({
    trigger: "#trigger",
    start: "center center",
    markers: false,
    onEnter: () => rotateTween().play(0),
  });
};
