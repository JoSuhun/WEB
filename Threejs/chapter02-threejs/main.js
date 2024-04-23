import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.shadowMap.enabled = true;
// 🧩 shadow
// renderer.shadowMap.type = THREE.BasicShadowMap; // 품질이 가장 낮은
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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
directionalLight.shadow.mapSize.width = 4096;
directionalLight.shadow.mapSize.height = 4096;
directionalLight.shadow.camera.top = 2;
directionalLight.shadow.camera.bottom = -2;
directionalLight.shadow.camera.left = -2;
directionalLight.shadow.camera.right = 2;

directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 100;

scene.add(directionalLight);
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
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.castShadow = true;
boxMesh.receiveShadow = true;
boxMesh.position.y = 0.5;
scene.add(boxMesh);

// 🥎 OrbitControls
// const orbitControls = new OrbitControls(camera, renderer.domElement);
// orbitControls.enableDamping = true; // 부드럽게 카메라 이동
// orbitControls.dampingFactor = 0.03; // 값이 낮을수록 더 부드러워짐
// orbitControls.enableZoom = true; // 카메라 줌 - 기본값이 true
// orbitControls.enablePan = true; // 카메라 이동 가능
// orbitControls.enableRotate = true; // 카메라 회전 가능
// orbitControls.autoRotate = false; // 카메라 원점 기준으로 자동회전
// orbitControls.autoRotateSpeed = 10; // 기본값이 2
// orbitControls.maxPolarAngle = Math.PI / 2; // 수직 앵글 반경 최대값 지정
// orbitControls.minPolarAngle = Math.PI / 4; // 수직 앵글 반경 최소값 지정
// orbitControls.maxAzimuthAngle = Math.PI / 2; // 수평 앵글 반경 최소값 지정
// orbitControls.minAzimuthAngle = -Math.PI / 2; // 수평 앵글 반경 최소값 지정

// 🥎 FlyControls
// const flyControls = new FlyControls(camera, renderer.domElement);
// flyControls.movementSpeed = 1;
// flyControls.rollSpeed = Math.PI / 10;
// flyControls.autoForward = false;

// 🥎 FirstPersonControls
// camera.position.set(0, 1, 5);
// const firstPersonControls = new FirstPersonControls(
//   camera,
//   renderer.domElement
// );
// firstPersonControls.lookSpeed = 0.1;
// firstPersonControls.movementSpeed = 1;
// firstPersonControls.lookVertical = true;

// 🥎 PointerLockControls
// const pointerLockControls = new PointerLockControls(
//   camera,
//   renderer.domElement
// );
// window.addEventListener("click", () => pointerLockControls.lock());

// 🥎 TrackballControls
const trackballControls = new TrackballControls(camera, renderer.domElement);
trackballControls.rotateSpeed = 2;
trackballControls.zoomSpeed = 1.5;
trackballControls.panSpeed = 0.5;
trackballControls.noRotate = false;
trackballControls.noZoom = false;
trackballControls.noPan = false;
trackballControls.staticMoving = false;
trackballControls.dynamicDampingFactor = 0.05;

const target = new THREE.Mesh(
  new THREE.SphereGeometry(0.5),
  new THREE.MeshStandardMaterial({ color: 0x0000ff })
);
target.position.set(4, 0.5, 0);
scene.add(target);
trackballControls.target = target.position;

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight; // mesh 비율 유지
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
});

const clock = new THREE.Clock();
const render = () => {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
  //   orbitControls.update();
  //   flyControls.update(clock.getDelta());
  //   firstPersonControls.update(clock.getDelta());
  trackballControls.update();
};

render();
