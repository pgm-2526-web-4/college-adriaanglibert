import gsap from "gsap";
import "./game.css";

const $ball = document.getElementById("ball");
const $score = document.getElementById("score");
const BALL_SIZE = 64;
let speed = 2;
let score = 0;

const getRandomLocation = () => {
  return {
    x: `random(0, ${Math.round(window.innerWidth) - BALL_SIZE})`,
    y: `random(0, ${Math.round(window.innerHeight) - BALL_SIZE})`,
  };
};

function setScore() {
  score++;

  if ($score) {
    $score.textContent = score.toString();
  }

  if (score % 10 === 0) {
    increaseSpeed();
  }
}

function increaseSpeed() {
  if (speed > 0.5) {
    console.log("🔥 Increasing difficulty.");
    speed -= 0.5;
  }
}

const moveBall = () => {
  return gsap.to($ball, {
    ...getRandomLocation(),
    duration: speed,
  });
};

$ball?.addEventListener("click", () => {
  moveBall().play();
  setScore();
});

window.addEventListener("click", (e) => {
  if (e.target !== $ball) {
    gsap.to("body", {
      backgroundColor: "hsl(4, 100%, 69%)",
      duration: 0.2,
      repeat: 1,
      yoyo: true,
    });
  }
});

moveBall().play();
