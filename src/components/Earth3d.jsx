import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Earth3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Disable zoom

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    const loader = new GLTFLoader();
    let earth;
    loader.load('/ball.glb', (gltf) => {
      earth = gltf.scene;
      earth.scale.set(2, 2, 2);
      scene.add(earth);
      animate();
    }, undefined, (error) => {
      console.error('Error loading the GLTF file:', error);
    });

    function animate() {
      requestAnimationFrame(animate);

      if (earth) {
        earth.rotation.y += 0.005;
      }

      controls.update();

      renderer.render(scene, camera);
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '90vh', height: 'auto', position: 'absolute',backgroundColor:'red' }}
    />
  );
};

export default Earth3D;
