import gsap from "gsap";
import { BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, MeshLambertMaterial, DirectionalLight } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

gsap.registerPlugin(ScrollTrigger);

function initThree() {
  const $canvasContainer = document.getElementById("canvas");

  const renderer = new WebGLRenderer({ alpha: true, antialias: true });
  const scene = new Scene();
  const camera = new PerspectiveCamera(50, $canvasContainer.clientWidth / $canvasContainer.clientHeight);

  const box = new BoxGeometry(300, 300, 300);
  const material = new MeshLambertMaterial({ color: 0x00ff00 });
  const light = new DirectionalLight(0xffee00, 3);
  let mercedes;

  scene.add(light);

  const loader = new GLTFLoader();

  loader.load("/mercedes/scene.gltf", (gltf) => {
    mercedes = gltf.scene;
    scene.add(mercedes);

    mercedes.scale.x = 8;
    mercedes.scale.z = 8;
    mercedes.scale.y = 8;
    mercedes.position.y = -50;
    mercedes.position.z = 500;

    const mercedesTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 2
      }
    });

    mercedesTimeline
      .to(mercedes.scale, {
        x: 5,
        y: 5,
        z: 5
      })
      .to(mercedes.rotation, {
        x: .34
      })
      .to(mercedes.rotation, {
        y: 6.2
      });
  });

  camera.position.z = 700;
  light.position.y = 500;
  light.position.z = 500;

  renderer.setSize($canvasContainer.clientWidth, $canvasContainer.clientHeight);
  $canvasContainer.appendChild(renderer.domElement);

  function animate(time) {
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);

  window.addEventListener("resize", () => {
    camera.aspect = $canvasContainer.clientWidth / $canvasContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize($canvasContainer.clientWidth, $canvasContainer.clientHeight);
  });
}

export default initThree;
