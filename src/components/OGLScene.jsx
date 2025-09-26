import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Box } from 'ogl';

const OGLScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize WebGL renderer
    const renderer = new Renderer({
      canvas: canvasRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      antialias: true,
    });

    const gl = renderer.gl;
    gl.clearColor(1, 1, 1, 1);

    // Create camera
    const camera = new Camera(gl, {
      fov: 35,
    });
    camera.position.z = 5;

    // Create scene
    const scene = new Transform();

    // Create a rotating cube
    const geometry = new Box(gl);
    const program = new Program(gl, {
      vertex: `
        attribute vec3 position;
        attribute vec3 normal;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec3 vNormal;

        void main() {
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        varying vec3 vNormal;

        void main() {
          vec3 normal = normalize(vNormal);
          float lighting = dot(normal, normalize(vec3(-0.5, 1.0, 0.5)));
          gl_FragColor = vec4(vec3(0.68, 0.56, 0.44) * (0.5 + 0.5 * lighting), 1.0);
        }
      `,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    // Handle window resize
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.perspective({
        aspect: window.innerWidth / window.innerHeight,
      });
    };
    window.addEventListener('resize', resize, false);

    // Animation loop
    const animate = () => {
      const frame = requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;

      renderer.render({ scene, camera });

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', resize);
      };
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="ogl-canvas" />;
};

export default OGLScene;