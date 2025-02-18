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

// 创建一个透视投影相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
console.log("camera", camera);
// 设置相机位置
camera.position.set(0, 0, 10);
// camera.lookAt(0, 0, 0); // 相机视线 相机看向坐标原点
// camera.lookAt(0, 10, 0); // 相机视线 相机看向y轴一点
camera.lookAt(mesh.position); // 相机视线 相机看向网格模型
// 将相机添加到三维场景中
scene.add(camera);
