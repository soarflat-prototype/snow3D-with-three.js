import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const dir = new THREE.Vector3(1, 2, 1);

dir.normalize();

const origin = new THREE.Vector3(0, 0, 0);
const length = 1;
const hex = 0xffff00;

const arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex);
scene.add(arrowHelper);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();