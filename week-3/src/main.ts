import gsap from "gsap";
import {
  changeBackgroundTween,
  fadeInTween,
  moveRightTween,
  scaleDownTween,
  scaleUpTween,
} from "./animations/basic";
import "./style.css";

const bodyTimeline = gsap.timeline({
  paused: true,
});

bodyTimeline.add(fadeInTween).add(changeBackgroundTween);

const boxTimeline = gsap.timeline({
  delay: 1,
  yoyo: true,
  repeat: 1,
  paused: true,
  defaults: {
    rotate: 90,
  },
});

boxTimeline
  .add(moveRightTween.play())
  .add(scaleDownTween.play())
  .add(scaleUpTween.play());

const masterTimeline = gsap.timeline();

masterTimeline.add(bodyTimeline.play()).add(boxTimeline.play());
