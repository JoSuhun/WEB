import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap; // 품질이 가장 낮은
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60, // FoV : Filed of View
  window.innerWidth / window.innerHeight, // camera의 가로/세로 비율
  0.1, // near
  100 // far
);
camera.position.y = 1;
camera.position.z = 8;

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
directionalLight.castShadow = true;
directionalLight.position.set(3, 4, 5);
directionalLight.lookAt(0, 0, 0);
scene.add(directionalLight);
// 🤍 DirectionalLightHelper
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  1
);
scene.add(directionalLightHelper);

const floorGeometry = new THREE.PlaneGeometry(20, 20);
const floorMaterial = new THREE.MeshStandardMaterial({
  color: 0xbbbbbb,
  side: THREE.FrontSide,
});
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
floor.castShadow = true;
scene.add(floor);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.castShadow = true;
boxMesh.receiveShadow = true;
boxMesh.position.y = 0.5;
scene.add(boxMesh);

const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.update();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight; // mesh 비율 유지
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
});

const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  textureMesh.rotation.y += 0.01;
};

render();
