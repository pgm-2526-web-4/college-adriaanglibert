import { BoxGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, Scene, WebGLRenderer, AmbientLight, MeshLambertMaterial, DirectionalLight } from "three";

function initThree() {
  const $canvasContainer = document.getElementById("canvas");

  const renderer = new WebGLRenderer();
  const scene = new Scene();
  const camera = new PerspectiveCamera();

  const box = new BoxGeometry(10, 10, 10);
  const material = new MeshLambertMaterial({ color: 0x00ff00 });
  const cube = new Mesh(box, material);
  const light = new DirectionalLight(0xffee00, .8);

  scene.add(cube);
  scene.add(light);

  cube.rotation.x = 20;
  camera.position.z = 100;
  light.position.z = 100;

  renderer.setSize($canvasContainer.clientWidth, $canvasContainer.clientHeight);
  $canvasContainer.appendChild(renderer.domElement);

  function animate(time) {
    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(animate);
}

export default initThree;
