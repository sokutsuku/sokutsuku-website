// src/components/backgrounds/Balatro.tsx
"use client";

import { Renderer, Program, Mesh, Triangle } from "ogl";
import { useEffect, useRef } from "react";

interface BalatroProps {
  spinRotation?: number;
  spinSpeed?: number;
  offset?: [number, number];
  color1?: string; // HEX e.g., "#DE443B"
  color2?: string; // HEX e.g., "#006BB4"
  color3?: string; // HEX e.g., "#162325"
  contrast?: number;
  lighting?: number;
  spinAmount?: number;
  pixelFilter?: number;
  spinEase?: number;
  isRotate?: boolean;
  mouseInteraction?: boolean;
}

// Helper function to convert HEX color to a Vec4-like array [r, g, b, a]
function hexToVec4(hex: string): [number, number, number, number] {
  const hexStr = hex.replace("#", "");
  let r = 0,
    g = 0,
    b = 0,
    a = 1; // Default alpha to 1

  // Parse 6-digit hex (RGB)
  if (hexStr.length === 6) {
    r = parseInt(hexStr.slice(0, 2), 16) / 255;
    g = parseInt(hexStr.slice(2, 4), 16) / 255;
    b = parseInt(hexStr.slice(4, 6), 16) / 255;
  }
  // Parse 8-digit hex (RGBA)
  else if (hexStr.length === 8) {
    r = parseInt(hexStr.slice(0, 2), 16) / 255;
    g = parseInt(hexStr.slice(2, 4), 16) / 255;
    b = parseInt(hexStr.slice(4, 6), 16) / 255;
    a = parseInt(hexStr.slice(6, 8), 16) / 255;
  }
  // Handle invalid hex strings by returning a default color (e.g., black)
  // else {
  //   console.warn(`Invalid hex color: ${hex}, defaulting to black.`);
  //   return [0, 0, 0, 1];
  // }
  return [r, g, b, a];
}

// Vertex Shader
const vertexShader = `
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

// Fragment Shader
const fragmentShader = `
precision highp float;

#define PI 3.14159265359

uniform float iTime;
uniform vec3 iResolution; // ogl uses vec3 for resolution [width, height, pixelRatio (or aspect)]
uniform float uSpinRotation;
uniform float uSpinSpeed;
uniform vec2 uOffset;
uniform vec4 uColor1;
uniform vec4 uColor2;
uniform vec4 uColor3;
uniform float uContrast;
uniform float uLighting;
uniform float uSpinAmount;
uniform float uPixelFilter;
uniform float uSpinEase;
uniform bool uIsRotate;
uniform vec2 uMouse; // Expects mouse coordinates normalized (0 to 1)

varying vec2 vUv; // UV coordinates from vertex shader

// Main effect function
vec4 effect(vec2 screenSize, vec2 screen_coords) {
    float pixel_size = length(screenSize.xy) / uPixelFilter;
    vec2 uv = (floor(screen_coords.xy * (1.0 / pixel_size)) * pixel_size - 0.5 * screenSize.xy) / length(screenSize.xy) - uOffset;
    float uv_len = length(uv);
    
    float speed = (uSpinRotation * uSpinEase * 0.2);
    if(uIsRotate){ // If rotation is enabled
       speed = iTime * speed; // Time-based rotation
    }
    speed += 302.2; // Initial offset for angle
    
    // Mouse influence for gentle rotation (applied additively)
    // uMouse.x is expected to be normalized (0 to 1), convert to -1 to 1 range
    float mouseInfluenceX = (uMouse.x * 2.0 - 1.0); 
    speed += mouseInfluenceX * 0.1; // Adjust sensitivity as needed
    
    float new_pixel_angle = atan(uv.y, uv.x) + speed - uSpinEase * 20.0 * (uSpinAmount * uv_len + (1.0 - uSpinAmount));
    vec2 mid = (screenSize.xy / length(screenSize.xy)) / 2.0;
    uv = (vec2(uv_len * cos(new_pixel_angle) + mid.x, uv_len * sin(new_pixel_angle) + mid.y) - mid);
    
    uv *= 30.0; // Scale UV for pattern
    
    // Re-apply mouse influence for the pattern generation part, if desired
    // This part seems to be a different speed calculation, ensure it's intended
    float basePatternSpeed = iTime * uSpinSpeed;
    float patternSpeed = basePatternSpeed + mouseInfluenceX * 2.0; // Mouse influences pattern speed
    
    vec2 uv2 = vec2(uv.x + uv.y);
    
    // Iterative pattern generation
    for(int i = 0; i < 5; i++) {
        uv2 += sin(max(uv.x, uv.y)) + uv;
        uv += 0.5 * vec2(
            cos(5.1123314 + 0.353 * uv2.y + patternSpeed * 0.131121),
            sin(uv2.x - 0.113 * patternSpeed)
        );
        uv -= cos(uv.x + uv.y) - sin(uv.x * 0.711 - uv.y);
    }
    
    // Color mixing and lighting
    float contrast_mod = (0.25 * uContrast + 0.5 * uSpinAmount + 1.2);
    float paint_res = min(2.0, max(0.0, length(uv) * 0.035 * contrast_mod));
    float c1p = max(0.0, 1.0 - contrast_mod * abs(1.0 - paint_res));
    float c2p = max(0.0, 1.0 - contrast_mod * abs(paint_res));
    float c3p = 1.0 - min(1.0, c1p + c2p);
    float light = (uLighting - 0.2) * max(c1p * 5.0 - 4.0, 0.0) + uLighting * max(c2p * 5.0 - 4.0, 0.0);
    
    // Final color calculation
    return (0.3 / uContrast) * uColor1 + (1.0 - 0.3 / uContrast) * (uColor1 * c1p + uColor2 * c2p + vec4(c3p * uColor3.rgb, c3p * uColor1.a)) + light;
}

// Main shader entry point
void main() {
    // vUv is normalized (0 to 1), scale by resolution for pixel coordinates
    vec2 pixelCoords = vUv * iResolution.xy; 
    gl_FragColor = effect(iResolution.xy, pixelCoords);
}
`;

export default function Balatro({
  spinRotation = -2.0,
  spinSpeed = 7.0,
  offset = [0.0, 0.0],
  color1="#F9FAFB", // Default to light gray/white
  color2="#2563EB", // Default to a blue
  color3="#F3F4F6", // Default to another light gray
  contrast = 3.5,
  lighting = 0.4,
  spinAmount = 0.25,
  pixelFilter = 4000,
  spinEase = 1.0,
  isRotate = false,
  mouseInteraction = true,
}: BalatroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return; // Ensure container exists

    const container = containerRef.current;
    const renderer = new Renderer({
      dpr: window.devicePixelRatio || 1, // Set device pixel ratio for sharpness
      alpha: true, // Enable transparency
      premultipliedAlpha: true, // Important for correct blending with transparent background
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0); // Set clear color to transparent black

    // 修正点: const program: Program; を let program: Program; に変更
    let program: Program; // Declare program with let as it's assigned later

    // Resize handler function
    function resize() {
      if (!container) return;
      // Set renderer size based on container dimensions
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      // Update iResolution uniform if program is initialized
      if (program && program.uniforms.iResolution) { // Check if program and uniform exist
        program.uniforms.iResolution.value = [
          gl.canvas.width,
          gl.canvas.height,
          gl.canvas.width / gl.canvas.height, // Aspect ratio or pixel density, ogl typically uses 3 components
        ];
      }
    }
    window.addEventListener("resize", resize);
    resize(); // Initial call to set size

    // Create OGL Program
    program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: [ // Initial resolution
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height,
          ],
        },
        uSpinRotation: { value: spinRotation },
        uSpinSpeed: { value: spinSpeed },
        uOffset: { value: offset },
        uColor1: { value: hexToVec4(color1) },
        uColor2: { value: hexToVec4(color2) },
        uColor3: { value: hexToVec4(color3) },
        uContrast: { value: contrast },
        uLighting: { value: lighting },
        uSpinAmount: { value: spinAmount },
        uPixelFilter: { value: pixelFilter },
        uSpinEase: { value: spinEase },
        uIsRotate: { value: isRotate },
        uMouse: { value: [0.5, 0.5] }, // Initial mouse position (center)
      },
    });

    // Create a triangle mesh
    const geometry = new Triangle(gl);
    const mesh = new Mesh(gl, { geometry, program });

    let animationFrameId: number; // To store requestAnimationFrame ID

    // Animation loop
    function update(time: number) {
      animationFrameId = requestAnimationFrame(update); // Request next frame
      if (program && program.uniforms.iTime) { // Check if program and uniform exist
          program.uniforms.iTime.value = time * 0.001; // Update time uniform
      }
      renderer.render({ scene: mesh }); // Render the scene
    }
    animationFrameId = requestAnimationFrame(update); // Start animation loop

    container.appendChild(gl.canvas); // Append canvas to the container

    // Mouse move handler
    function handleMouseMove(e: MouseEvent) {
      if (!mouseInteraction || !container || !program || !program.uniforms.uMouse) return; // Guard clauses
      const rect = container.getBoundingClientRect();
      // Normalize mouse coordinates to 0-1 range relative to the canvas
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height; // Invert Y for typical shader coords
      program.uniforms.uMouse.value = [x, y];
    }
    if (mouseInteraction) { // Only add listener if interaction is enabled
        container.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup function for useEffect
    return () => {
      cancelAnimationFrame(animationFrameId); // Stop animation loop
      window.removeEventListener("resize", resize); // Remove resize listener
      if (mouseInteraction && container) { // Only remove if added
        container.removeEventListener("mousemove", handleMouseMove);
      }
      if (container && gl.canvas && container.contains(gl.canvas)) { // Check if canvas is a child
        container.removeChild(gl.canvas);
      }
      // Attempt to gracefully lose WebGL context
      const loseContextExt = gl.getExtension("WEBGL_lose_context");
      if (loseContextExt) {
        loseContextExt.loseContext();
      }
    };
  }, [ // useEffect dependencies
    spinRotation,
    spinSpeed,
    offset,
    color1,
    color2,
    color3,
    contrast,
    lighting,
    spinAmount,
    pixelFilter,
    spinEase,
    isRotate,
    mouseInteraction
    // vertexShader and fragmentShader are defined outside and are constant,
    // so they don't need to be in the dependency array if they never change.
    // If they could change based on props/state, they should be included or memoized.
  ]);

  return <div ref={containerRef} className="w-full h-full" />;
}
