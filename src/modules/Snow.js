import * as THREE from 'three';

const TO_RADIANS = Math.PI / 180;

export default class Snow extends THREE.Sprite {
  constructor(material) {
    super(material);
    this.velocity = new THREE.Vector3(0, -8, 0);
    this.velocity.rotateX = rotateX.bind(this);
    this.velocity.rotateY = rotateY.bind(this);
    this.velocity.rotateX(randomRange(-45, 45));
    this.velocity.rotateY(randomRange(0, 360));
    this.gravity = new THREE.Vector3(0, 0, 0);
    this.position.set(
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
      Math.random() * 2000 - 1000,
    );
    this.drag = 1;
  }

  updatePhysics() {
    this.velocity.multiplyScalar(this.drag);
    this.velocity.add(this.gravity);
    this.position.add(this.velocity);
  }
}

function rotateY(angle) {
  const cosRY = Math.cos(angle * TO_RADIANS);
  const sinRY = Math.sin(angle * TO_RADIANS);
  const tempZ = this.velocity.z;
  const tempX = this.velocity.x;
  this.velocity.x = (tempX * cosRY) + (tempZ * sinRY);
  this.velocity.z = (tempX * -sinRY) + (tempZ * cosRY);
}

function rotateX(angle) {
  const cosRY = Math.cos(angle * TO_RADIANS);
  const sinRY = Math.sin(angle * TO_RADIANS);
  const tempZ = this.velocity.z;
  const tempY = this.velocity.y;
  this.velocity.y = (tempY * cosRY) + (tempZ * sinRY);
  this.velocity.z = (tempY * -sinRY) + (tempZ * cosRY);
}

function randomRange(min, max) {
  return ((Math.random() * (max - min)) + min);
}
