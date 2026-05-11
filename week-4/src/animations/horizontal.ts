import gsap from "gsap";

const $horizontalScrollContainers = document.querySelectorAll(
  "[data-animation='horizontal-scroll-container']",
);

export const initHorizontalScroll = () => {
  $horizontalScrollContainers.forEach(($horizontalScrollContainer) => {
    const $elementToMove = $horizontalScrollContainer.firstElementChild;

    if ($elementToMove) {
      const horizontalScrollTween = gsap.to($elementToMove, {
        x: -1 * ($elementToMove?.scrollWidth - window.innerWidth),
        scrollTrigger: {
          trigger: $horizontalScrollContainer,
          start: "bottom bottom",
          end: `+=${$elementToMove?.scrollWidth}`,
          scrub: true,
          pin: $horizontalScrollContainer,
        },
      });

      // Selecteer de titel binnen-in $elementToMove and rotate die 360 graden.
      const $elementsToRotate = $elementToMove.querySelectorAll(
        "[data-animation='rotate']",
      );

      $elementsToRotate.forEach(($elementToRotate) => {
        gsap.to($elementToRotate, {
          rotate: 360,
          scrollTrigger: {
            trigger: $elementToRotate,
            markers: true,
            start: "center center",
            end: "end end",
            scrub: true,
            containerAnimation: horizontalScrollTween,
          },
        });
      });
    }
  });
};
