import * as THREE from 'three';

// three.jsで何かを表示させるためには
// シーン、カメラ、レンダラーという3つが必要になるためそれらを作成する

// シーンの作成
const scene = new THREE.Scene();

// カメラの作成
// カメラは複数存在するが、今回は奥行きを見渡せるPerspectiveCameraを利用する
// それぞれの引数の値は以下の通り
// new THREE.PerspectiveCamera(視野角, 画面サイズ, カメラの見える範囲最小値, カメラの見える範囲最大値)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// レンダラーの作成
const renderer = new THREE.WebGLRenderer();

// アプリケーションのレンダリングに必要なサイズも設定する
// パフォーマンスを重視するアプリケーションの場合は
// window.innerWidth / 2やwindow.innerHeight / 2などのより小さい値をsetSizeに渡すこともできる
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ボックスジオメトリ（四角形）を作成する
// それぞれの引数の値は以下の通り
// new THREE.BoxGeometry(幅, 高さ, 深度);
const geometry = new THREE.BoxGeometry(1, 1, 1);

// ジオメトリに色をつけるためのマテリアルを作成する
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// ジオメトリを取得し、それにマテリアルを適用し
// シーンに挿入して自由に移動できるオブジェクトをcubeという名前で作成
const cube = new THREE.Mesh(geometry, material);

// シーンにcubeを追加
scene.add(cube);

camera.position.z = 5;

// レンダリングアニメーション
const animate = () => {
  requestAnimationFrame(animate);

  // キューブを回転させる
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;

  renderer.render(scene, camera);
};

animate();