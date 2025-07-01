import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

export default function BrainAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const animationIdRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Load Three.js dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = initBrainAnimation;
    document.head.appendChild(script);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      document.head.removeChild(script);
    };
  }, []);

  const initBrainAnimation = () => {
    if (!containerRef.current || !window.THREE) return;

    const container = containerRef.current;
    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const size = window.innerWidth < 768 ? 300 : 400;
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Create brain structure
    const brainGeometry = new window.THREE.SphereGeometry(2, 32, 32);
    const brainMaterial = new window.THREE.MeshPhongMaterial({
      color: 0x404040,
      transparent: true,
      opacity: 0.3,
      wireframe: true
    });
    const brain = new window.THREE.Mesh(brainGeometry, brainMaterial);
    scene.add(brain);

    // Create neurons (particles)
    const neuronGeometry = new window.THREE.SphereGeometry(0.05, 8, 8);
    const neuronMaterial = new window.THREE.MeshBasicMaterial({ color: 0x3B82F6 });
    const neurons: any[] = [];

    for (let i = 0; i < 200; i++) {
      const neuron = new window.THREE.Mesh(neuronGeometry, neuronMaterial);
      const phi = Math.acos(-1 + (2 * i) / 200);
      const theta = Math.sqrt(200 * Math.PI) * phi;
      
      neuron.position.setFromSphericalCoords(1.8, phi, theta);
      neurons.push(neuron);
      scene.add(neuron);
    }

    // Create neural connections
    const connectionMaterial = new window.THREE.LineBasicMaterial({
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.3
    });

    for (let i = 0; i < 50; i++) {
      const connectionGeometry = new window.THREE.BufferGeometry();
      const neuron1 = neurons[Math.floor(Math.random() * neurons.length)];
      const neuron2 = neurons[Math.floor(Math.random() * neurons.length)];
      
      const points = [neuron1.position, neuron2.position];
      connectionGeometry.setFromPoints(points);
      
      const connection = new window.THREE.Line(connectionGeometry, connectionMaterial);
      scene.add(connection);
    }

    // Lighting
    const ambientLight = new window.THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new window.THREE.DirectionalLight(0x3B82F6, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      brain.rotation.y += 0.005;
      brain.rotation.x += 0.002;
      
      neurons.forEach((neuron, index) => {
        neuron.material.opacity = 0.5 + 0.5 * Math.sin(Date.now() * 0.001 + index * 0.1);
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      const newSize = window.innerWidth < 768 ? 300 : 400;
      renderer.setSize(newSize, newSize);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  };

  return (
    <div 
      ref={containerRef}
      className="w-[400px] h-[400px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] mx-auto animate-slide-up"
    />
  );
}
