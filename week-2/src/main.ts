import { fadeInUpTween, rotateMoveTween } from "./animations/basic";
import "./style.css";

fadeInUpTween.play();

// Druk op knop - speel de animatie!
const $playRotateAndMoveButton = document.getElementById("rotate-and-move");

$playRotateAndMoveButton?.addEventListener("click", () => {
  if (rotateMoveTween.progress()) {
    return rotateMoveTween.reverse();
  }

  rotateMoveTween.play();
});
