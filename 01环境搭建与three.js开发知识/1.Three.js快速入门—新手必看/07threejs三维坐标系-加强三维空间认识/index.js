import * as THREE from "three";
// 创建一个三维场景
const scene = new THREE.Scene();
// 给三维场景添加一个几何体
const geometry = new THREE.BoxGeometry(50, 50, 50);
// 给三维场景添加一个材质
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  transparent: true, //开启透明
  opacity: 0.6, //透明度
});
// 给三维场景添加一个网格模型
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(50, 10, 0);
// 将网格添加到三维场景中
scene.add(mesh);

// 参数1：视野竖直方向角度，也就是观察范围 参数2：宽高比 参数3：近裁剪面 参数4：远裁剪面距离
const width = 800;
const height = 500;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 1025);
console.log("camera", camera);
// 设置相机位置
// camera.position.set(200, 200, 200);
camera.position.set(-1000, 0, 0);
camera.lookAt(0, 0, 0); // 相机视线 相机看向坐标原点
// camera.lookAt(0, 10, 0); // 相机视线 相机看向y轴一点
// camera.lookAt(mesh.position); // 相机视线 相机看向网格模型
// 将相机添加到三维场景中
scene.add(camera);

// 创建一个坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

// 创建一个渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); // 设置渲染器的大小
renderer.render(scene, camera); //执行一个渲染操作。类比相机的拍照功能 咔嚓
// 将渲染结果添加到网页上
// document.body.appendChild(renderer.domElement);
document.getElementById("webgl").appendChild(renderer.domElement);
