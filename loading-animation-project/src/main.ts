import "./style.css";
import "./loader.css";
import loaderTimeline from "./animations/loader";
import gsap from "gsap";

const masterTimeline = gsap.timeline();

masterTimeline
  .add(loaderTimeline)
  .from("[data-animation='content']", { opacity: 0 });
