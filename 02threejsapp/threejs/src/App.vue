<script setup lang="ts">
  // import HelloWorld from "./components/HelloWorld.vue";

  import * as THREE from "three";
  // 导入轨道控制器
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

  //1. 创建场景
  const scene = new THREE.Scene();

  //2. 创建相机
  const camera = new THREE.PerspectiveCamera(
    45, //视角
    window.innerWidth / window.innerHeight, //宽高比
    0.1, //近平面
    1000 //远平面
  );

  //3. 创建渲染器
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //创建几何体
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  //创建材质
  const material = new THREE.MeshBasicMaterial({ color: "#ccc" });
  //创建网格
  const cube = new THREE.Mesh(geometry, material);

  //将网格添加到场景中
  scene.add(cube);
  //设置相机位置
  camera.position.z = 5;
  camera.position.y = 2;
  camera.position.x = 2;
  camera.lookAt(0, 0, 0);

  //添加世界坐标辅助器
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  // 添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);

  let renderIndex = 0; //渲染次数
  //4. 渲染函数
  function animate() {
    controls.update();
    // console.log(renderIndex++);
    requestAnimationFrame(animate);
    //旋转
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    //渲染
    renderer.render(scene, camera);
  }
  animate();
</script>

<template>
  <div>111</div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  canvas {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
</style>
