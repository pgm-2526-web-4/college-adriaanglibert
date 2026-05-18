import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger]);

function initImageEffects() {
  const $parallaxMasks = document.querySelectorAll(
    "[data-animation='parallax-image']",
  );

  $parallaxMasks.forEach(($parallaxMask) => {
    const $parallaxImage = $parallaxMask.querySelector("img");

    if ($parallaxImage) {
      gsap.set($parallaxImage, {
        scale: 1.5,
      });

      gsap.to($parallaxImage, {
        y: gsap.utils.random(-100, 100),
        scrollTrigger: {
          trigger: $parallaxMask,
          start: "80px 100%",
          end: "100% 50%",
          scrub: true,
        },
      });
    }
  });
}

export default initImageEffects;
