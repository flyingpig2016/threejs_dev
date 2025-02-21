import * as THREE from "three";
// 创建一个三维场景
const scene = new THREE.Scene();
console.log(scene);

// 给三维场景添加一个几何体
const geometry = new THREE.BoxGeometry(100, 100, 100);
console.log(geometry);

// 给三维场景添加一个材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
console.log(material);

// 给三维场景添加一个网格模型
const mesh = new THREE.Mesh(geometry, material);
console.log("mesh", mesh);
mesh.position.set(0, 10, 0);
// 将网格添加到三维场景中
scene.add(mesh);
