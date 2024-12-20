import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Earth3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 4);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    const ambientLight = new THREE.AmbientLight(0x404040, 5); // Increased intensity
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100); // Increased intensity
    pointLight.position.set(5, 5, 5); // Moved closer
    scene.add(pointLight);

    const loader = new GLTFLoader();
    let earth;
    loader.load('/ironBall.glb', (gltf) => {
      earth = gltf.scene;
      earth.scale.set(2, 2, 2); // Increased scale
      earth.position.set(0, 0, 0); // Ensure centered position
      
      // Add material properties to make it more visible
      earth.traverse((child) => {
        if (child.isMesh) {
          child.material.metalness = 0.8;
          child.material.roughness = 0.2;
        }
      });
      
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
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      renderer.dispose();
      scene.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '400px', // Set explicit height
        position: 'absolute',
        zIndex: 100 // Ensure it's visible above other elements
      }}
    />
  );
};

export default Earth3D;
