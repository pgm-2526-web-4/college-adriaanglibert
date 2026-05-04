import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const $loader = document.querySelector("[data-animation='loader']");
const $logo = document.querySelector("[data-animation='loader-logo']");
const $bars = document.querySelectorAll("[data-animation='loader-bar']");

const logoSplit = SplitText.create($logo, { type: "chars" });

const logoFadeInTween = gsap.from(logoSplit.chars, {
  y: 40,
  ease: "back.inOut",
  stagger: {
    amount: 0.2,
  },
  paused: true,
});

const logoFadeOutTween = gsap.to(logoSplit.chars, {
  scale: 0,
  ease: "circ.inOut",
  stagger: {
    amount: 0.2,
    from: "center",
  },
  paused: true,
});

const changeBackgroundTween = gsap.to($bars, {
  backgroundColor: "#070707",
  paused: true,
});

const changeLogoColorTween = gsap.to($logo, {
  color: "#fff",
  paused: true,
});

const moveBarsTween = gsap.to($bars, {
  yPercent: 100,
  ease: "expo.in",
  stagger: 0.05,
  paused: true,
});

const loaderTimeline = gsap.timeline();

loaderTimeline
  .add(logoFadeInTween.play())
  .add(changeBackgroundTween.play())
  .add(changeLogoColorTween.play(), "<")
  .add(logoFadeOutTween.play())
  .add(moveBarsTween.play(), ">-=.5")
  .set($loader, { display: "none" });

export default loaderTimeline;
