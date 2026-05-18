import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function initParallax() {
  const $parallaxContainers = document.querySelectorAll(
    "[data-animation='parallax']",
  );

  $parallaxContainers.forEach(($parallaxContainer) => {
    const $parallaxChildren = $parallaxContainer.querySelectorAll(
      "[data-child='parallax']",
    );

    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: $parallaxContainer,
        start: "0 0",
        end: "20% 0",
        scrub: true,
      },
    });

    $parallaxChildren.forEach(($parallaxChild) => {
      const moveAmount = $parallaxChild.getAttribute("data-move");

      if (moveAmount) {
        parallaxTl.to(
          $parallaxChild,
          {
            y: parseInt(moveAmount),
          },
          0,
        );
      }
    });
  });
}

export default initParallax;
