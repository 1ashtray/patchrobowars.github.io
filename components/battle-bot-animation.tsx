"use client"

import { useEffect, useRef, useState } from "react"

export function BattleBotAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // We'll use dynamic imports to ensure Three.js only loads on the client
    const loadThreeJS = async () => {
      try {
        if (!containerRef.current) return

        // Dynamically import Three.js
        const THREE = await import("three")
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls")

        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000000)

        // Add fog for depth
        scene.fog = new THREE.Fog(0x000000, 10, 50)

        // Camera setup
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.set(0, 2, 8)

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.shadowMap.enabled = true
        containerRef.current.appendChild(renderer.domElement)

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.enableZoom = false
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
        directionalLight.position.set(5, 10, 7.5)
        directionalLight.castShadow = true
        scene.add(directionalLight)

        // Add dramatic spotlights
        const orangeSpotlight = new THREE.SpotLight(0xff7300, 2)
        orangeSpotlight.position.set(-5, 10, 0)
        orangeSpotlight.angle = Math.PI / 6
        orangeSpotlight.penumbra = 0.3
        scene.add(orangeSpotlight)

        const yellowSpotlight = new THREE.SpotLight(0xffb700, 2)
        yellowSpotlight.position.set(5, 10, 0)
        yellowSpotlight.angle = Math.PI / 6
        yellowSpotlight.penumbra = 0.3
        scene.add(yellowSpotlight)

        // Add a floor/arena
        const floorGeometry = new THREE.CircleGeometry(10, 32)
        const floorMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.8,
          metalness: 0.2,
        })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.receiveShadow = true
        scene.add(floor)

        // Add grid lines to the floor
        const gridHelper = new THREE.GridHelper(20, 20, 0xff7300, 0x444444)
        gridHelper.position.y = 0.01
        scene.add(gridHelper)

        // Placeholder robot model (cube with details)
        const robotGroup = new THREE.Group()
        scene.add(robotGroup)

        // Base/chassis
        const chassisGeometry = new THREE.BoxGeometry(2, 0.5, 3)
        const chassisMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.3,
          metalness: 0.8,
        })
        const chassis = new THREE.Mesh(chassisGeometry, chassisMaterial)
        chassis.position.y = 0.5
        chassis.castShadow = true
        robotGroup.add(chassis)

        // Wheels
        const wheelGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16)
        const wheelMaterial = new THREE.MeshStandardMaterial({
          color: 0x111111,
          roughness: 0.7,
          metalness: 0.3,
        })

        // Front left wheel
        const wheelFL = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelFL.rotation.z = Math.PI / 2
        wheelFL.position.set(-1.1, 0.4, 1)
        wheelFL.castShadow = true
        robotGroup.add(wheelFL)

        // Front right wheel
        const wheelFR = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelFR.rotation.z = Math.PI / 2
        wheelFR.position.set(1.1, 0.4, 1)
        wheelFR.castShadow = true
        robotGroup.add(wheelFR)

        // Back left wheel
        const wheelBL = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelBL.rotation.z = Math.PI / 2
        wheelBL.position.set(-1.1, 0.4, -1)
        wheelBL.castShadow = true
        robotGroup.add(wheelBL)

        // Back right wheel
        const wheelBR = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelBR.rotation.z = Math.PI / 2
        wheelBR.position.set(1.1, 0.4, -1)
        wheelBR.castShadow = true
        robotGroup.add(wheelBR)

        // Weapon (spinning blade)
        const bladeGeometry = new THREE.BoxGeometry(3, 0.2, 0.5)
        const bladeMaterial = new THREE.MeshStandardMaterial({
          color: 0xff7300,
          roughness: 0.2,
          metalness: 0.9,
          emissive: 0xff7300,
          emissiveIntensity: 0.5,
        })
        const blade = new THREE.Mesh(bladeGeometry, bladeMaterial)
        blade.position.set(0, 1.2, 0)
        blade.castShadow = true
        robotGroup.add(blade)

        // Top armor with details
        const armorGeometry = new THREE.BoxGeometry(1.8, 0.3, 2)
        const armorMaterial = new THREE.MeshStandardMaterial({
          color: 0xff9d00,
          roughness: 0.5,
          metalness: 0.7,
        })
        const armor = new THREE.Mesh(armorGeometry, armorMaterial)
        armor.position.set(0, 0.9, 0)
        armor.castShadow = true
        robotGroup.add(armor)

        // Add some details/lights to the robot
        const lightGeometry = new THREE.SphereGeometry(0.1, 16, 16)
        const orangeLightMaterial = new THREE.MeshStandardMaterial({
          color: 0xff7300,
          emissive: 0xff7300,
          emissiveIntensity: 1,
        })

        const light1 = new THREE.Mesh(lightGeometry, orangeLightMaterial)
        light1.position.set(0.5, 1.1, 0.8)
        robotGroup.add(light1)

        const light2 = new THREE.Mesh(lightGeometry, orangeLightMaterial)
        light2.position.set(-0.5, 1.1, 0.8)
        robotGroup.add(light2)

        // Track if robot is hovered
        const isRobotHovered = false

        // Animation loop
        let bladeRotation = 0
        const animate = () => {
          requestAnimationFrame(animate)

          // Rotate the blade - faster when hovered
          const rotationSpeed = isRobotHovered ? 0.3 : 0.1
          bladeRotation += rotationSpeed
          blade.rotation.y = bladeRotation

          // Pulse the lights
          const pulseValue = Math.abs(Math.sin(Date.now() * 0.003))
          orangeLightMaterial.emissiveIntensity = pulseValue * 2

          controls.update()
          renderer.render(scene, camera)
        }

        animate()

        // Handle window resize
        const handleResize = () => {
          if (!containerRef.current) return

          camera.aspect = window.innerWidth / window.innerHeight
          camera.updateProjectionMatrix()
          renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        // Cleanup
        return () => {
          window.removeEventListener("resize", handleResize)

          if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
            containerRef.current.removeChild(renderer.domElement)
          }
          // Dispose of geometries and materials
          ;[chassisGeometry, wheelGeometry, bladeGeometry, armorGeometry, lightGeometry].forEach((geometry) => {
            geometry.dispose()
          })
          ;[chassisMaterial, wheelMaterial, bladeMaterial, armorMaterial, orangeLightMaterial].forEach((material) => {
            material.dispose()
          })

          renderer.dispose()
        }
      } catch (error) {
        console.error("Error loading Three.js:", error)
        // Provide a fallback or error state
        if (containerRef.current) {
          const errorDiv = document.createElement("div")
          errorDiv.className = "flex items-center justify-center h-full w-full bg-black/50 text-white"
          errorDiv.innerHTML = `
            <div class="text-center p-8">
              <h3 class="text-xl font-bold mb-2">3D Animation Unavailable</h3>
              <p>Please try a different browser or device.</p>
            </div>
          `
          containerRef.current.appendChild(errorDiv)
        }
      }
    }

    loadThreeJS()
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    />
  )
}
