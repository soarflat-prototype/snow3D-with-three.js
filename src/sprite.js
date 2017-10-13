import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

// Spriteを作成し、シーンに追加してみる
// Sprite常にカメラの方を向いている平面で、一般的に部分的に透明なテクスチャが適用される
// 文字などを常に見えるように表示したい時にも利用されていた

// テクスチャを読み込む
const spriteMap = new THREE.TextureLoader().load('wood.jpg');

// Sprite用のマテリアルを作成する
const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });

// Spriteを作成する
const sprite = new THREE.Sprite(spriteMaterial);
scene.add(sprite);

const animate = () => {
  requestAnimationFrame(animate);

  sprite.rotation.x += 0.05;
  sprite.rotation.y += 0.05;

  renderer.render(scene, camera);
};

animate();