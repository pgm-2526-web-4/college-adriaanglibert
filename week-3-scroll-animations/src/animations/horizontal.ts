import gsap from "gsap";

const $horizontalScrollContainers = document.querySelectorAll(
  "[data-animation='horizontal-scroll-container']",
);

export const initHorizontalScroll = () => {
  $horizontalScrollContainers.forEach(($horizontalScrollContainer) => {
    const $elementToMove = $horizontalScrollContainer.firstElementChild;

    if ($elementToMove) {
      gsap.to($elementToMove, {
        x: -1 * ($elementToMove?.scrollWidth - window.innerWidth),
        scrollTrigger: {
          trigger: $horizontalScrollContainer,
          start: "bottom bottom",
          end: $elementToMove?.scrollWidth,
          scrub: true,
          pin: $horizontalScrollContainer,
        },
      });
    }
  });
};
