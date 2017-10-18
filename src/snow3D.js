import * as THREE from 'three';
import Particle3D from './modules/Snow';

const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;

let camera;
let scene;
let renderer;
let particles = [];

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000);
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const spriteMap = new THREE.TextureLoader().load('snow.png');
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });

for (let i = 0; i < 500; i++) {
  const particle = new Particle3D(spriteMaterial);
  scene.add(particle);
  particles.push(particle);
}

const animate = () => {
  requestAnimationFrame(animate);

  particles.forEach((particle) => {
    particle.updatePhysics();

    const p = particle.position;

    if (p.y < -1000) p.y += 2000;

    if (p.x > 1000) {
      p.x -= 2000;
    } else if (p.x < -1000) {
      p.x += 2000;
    }

    if (p.z > 1000) {
      p.z -= 2000;
    } else if (p.z < -1000) {
      p.z += 2000;
    }
  });

  renderer.render(scene, camera);
};

animate();
