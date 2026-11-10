// Museum-grade Brushed Titanium 1337 Monolith with Solar Champagne-Gold & Platinum Studio Rim Lighting
// Calm, heavy architectural presence confined strictly to the Hero section.

import * as THREE from 'three';

const BARS = [0.74, 2.22, 2.22, 5.18];

export function heroMark() {
  const canvas = document.getElementById('mark3d') as HTMLCanvasElement | null;
  if (!canvas) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const host = canvas.closest('section')!;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0.2, 11.8);

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
  } catch {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.32;

  // Dual-Temperature Studio Lighting Rig: Crisp Alabaster Key + Warm Solar Gold Rim + Cool Platinum Fill
  const ambient = new THREE.AmbientLight(0xffffff, 0.65);
  scene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xfffbeb, 3.2);
  keyLight.position.set(6, 9, 7);
  scene.add(keyLight);

  // Warm Solar Champagne Rim Light catching the right & back bevels
  const goldRim = new THREE.PointLight(0xfbbf24, 5.5, 24, 1.4);
  goldRim.position.set(4.5, 2.5, -2.5);
  scene.add(goldRim);

  // Cool Platinum Fill on the left
  const coolRim = new THREE.PointLight(0xe2e8f0, 3.5, 20, 1.5);
  coolRim.position.set(-5, -1, 3);
  scene.add(coolRim);

  const pointerLight = new THREE.PointLight(0xfde68a, 3.2, 16, 1.4);
  pointerLight.position.set(2, 1, 5);
  scene.add(pointerLight);

  // Procedural studio reflection environment with warm golden horizon & crisp overhead softbox
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const envGeo = new THREE.SphereGeometry(20, 32, 16);
  const envMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = (modelMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * viewMatrix * vec4(vPos, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vPos;
      void main() {
        vec3 d = normalize(vPos);
        float softTop = smoothstep(-0.1, 0.9, d.y);
        float studioStrip = smoothstep(0.5, 0.65, d.y) * smoothstep(0.88, 0.72, d.y);
        float horizonGlow = pow(1.0 - abs(d.y), 5.0);
        vec3 base = mix(vec3(0.03, 0.03, 0.04), vec3(0.78, 0.8, 0.85), softTop * 0.5 + studioStrip * 1.2);
        vec3 warm = vec3(0.98, 0.78, 0.42) * horizonGlow * 0.65;
        gl_FragColor = vec4(base + warm, 1.0);
      }
    `,
  });
  envScene.add(new THREE.Mesh(envGeo, envMat));
  scene.environment = pmrem.fromScene(envScene).texture;
  pmrem.dispose();

  const masterGroup = new THREE.Group();
  scene.add(masterGroup);

  const monolithGroup = new THREE.Group();
  masterGroup.add(monolithGroup);

  // Satin Brushed Gunmetal Titanium
  const titaniumMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(0x1f2026),
    metalness: 0.88,
    roughness: 0.18,
    clearcoat: 0.85,
    clearcoatRoughness: 0.12,
    envMapIntensity: 2.1,
  });

  // Warm Champagne-Platinum specular edge highlight
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0xfde68a,
    transparent: true,
    opacity: 0.34,
  });

  const bars: { mesh: THREE.Mesh; baseY: number; h: number }[] = [];

  BARS.forEach((h, i) => {
    const wBar = 0.94;
    const dBar = 0.94;
    const xPos = (i - 1.5) * 1.36;
    const baseY = -2.59 + h / 2;

    const geo = new THREE.BoxGeometry(wBar, h, dBar);
    const mesh = new THREE.Mesh(geo, titaniumMat);
    mesh.position.set(xPos, baseY - 4.5, 0);
    monolithGroup.add(mesh);

    const edgesGeo = new THREE.EdgesGeometry(geo);
    const edges = new THREE.LineSegments(edgesGeo, edgeMat);
    mesh.add(edges);

    bars.push({ mesh, baseY, h });
  });

  // Fine warm-gold & silver atmospheric motes around the monolith
  const dustCount = 150;
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 10;
    dustPos[i * 3 + 1] = (Math.random() - 0.5) * 7;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0xfef08a,
    size: 0.036,
    transparent: true,
    opacity: 0.42,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  masterGroup.add(dust);

  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  let running = true;

  function resize() {
    const w = canvas!.clientWidth || window.innerWidth;
    const h = canvas!.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    if (w > 980) {
      masterGroup.position.set(2.55, 0.05, 0);
      masterGroup.scale.setScalar(0.92);
    } else {
      masterGroup.position.set(0, 0.6, -1.5);
      masterGroup.scale.setScalar(0.65);
    }
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  host.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.tx = ((e.clientX - r.left) / r.width) * 2 - 1;
    mouse.ty = -((e.clientY - r.top) / r.height) * 2 + 1;
  }, { passive: true });

  host.addEventListener('pointerleave', () => {
    mouse.tx = 0;
    mouse.ty = 0;
  }, { passive: true });

  new IntersectionObserver(([entry]) => {
    const was = running;
    running = entry.isIntersecting;
    if (running && !was) requestAnimationFrame(animate);
  }).observe(canvas);

  const t0 = performance.now();

  function animate(now: number) {
    if (!running) return;
    const elapsed = (now - t0) * 0.001;

    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    bars.forEach((b, i) => {
      const bootT = Math.min(1, Math.max(0, (elapsed - 0.08 - i * 0.1) / 1.2));
      const easeOut = 1 - Math.pow(1 - bootT, 4);
      const breathe = Math.sin(elapsed * 0.9 + i * 0.7) * 0.045;
      b.mesh.position.y = (b.baseY - 4.5) + 4.5 * easeOut + breathe;
    });

    monolithGroup.rotation.y = -0.42 + Math.sin(elapsed * 0.22) * 0.12 + mouse.x * 0.28;
    monolithGroup.rotation.x = 0.08 + mouse.y * -0.14;

    dust.rotation.y = elapsed * 0.02;
    pointerLight.position.set(mouse.x * 4 + 2, mouse.y * 3 + 1, 5);

    renderer.render(scene, camera);
    if (!reduce) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
