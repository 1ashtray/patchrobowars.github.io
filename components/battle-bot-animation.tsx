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

        // Dynamically import Three.js with correct paths
        const THREE = await import("three")
        const { OrbitControls } = await import("three/addons/controls/OrbitControls.js")

        // Scene setup
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x000000)

        // Add fog for depth
        scene.fog = new THREE.Fog(0x000000, 5, 25)

        // Get container dimensions
        const container = containerRef.current
        const containerWidth = container.clientWidth
        const containerHeight = container.clientHeight

        // Camera setup - zoomed in closer to show the robot prominently
        const camera = new THREE.PerspectiveCamera(60, containerWidth / containerHeight, 0.1, 1000)
        camera.position.set(0, 3, 5) // Closer position for better view
        camera.lookAt(0, 1, 0) // Look at the robot center

        // Renderer setup - size to match container
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        renderer.setSize(containerWidth, containerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.shadowMap.enabled = true
        container.appendChild(renderer.domElement)

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.05
        controls.enableZoom = false
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.8
        controls.target.set(0, 1, 0) // Target the robot center
        controls.enablePan = false

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 1.2)
        scene.add(ambientLight)

        const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
        directionalLight.position.set(5, 10, 5)
        directionalLight.castShadow = true
        scene.add(directionalLight)

        // Add dramatic spotlights focused on robot
        const orangeSpotlight = new THREE.SpotLight(0xff7300, 4)
        orangeSpotlight.position.set(-3, 8, 3)
        orangeSpotlight.angle = Math.PI / 3
        orangeSpotlight.penumbra = 0.3
        orangeSpotlight.target.position.set(0, 1, 0)
        scene.add(orangeSpotlight)
        scene.add(orangeSpotlight.target)

        const yellowSpotlight = new THREE.SpotLight(0xffb700, 3)
        yellowSpotlight.position.set(3, 8, 3)
        yellowSpotlight.angle = Math.PI / 3
        yellowSpotlight.penumbra = 0.3
        yellowSpotlight.target.position.set(0, 1, 0)
        scene.add(yellowSpotlight)
        scene.add(yellowSpotlight.target)

        // Add a smaller floor for better focus
        const floorGeometry = new THREE.PlaneGeometry(15, 15)
        const floorMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.8,
          metalness: 0.2,
        })
        const floor = new THREE.Mesh(floorGeometry, floorMaterial)
        floor.rotation.x = -Math.PI / 2
        floor.receiveShadow = true
        scene.add(floor)

        // Add grid
        const gridHelper = new THREE.GridHelper(15, 15, 0xff7300, 0x444444)
        gridHelper.position.y = 0.01
        scene.add(gridHelper)

        // Robot group positioned at center for better visibility
        const robotGroup = new THREE.Group()
        robotGroup.position.set(0, 0, 0) // Centered position
        scene.add(robotGroup)

        // Base/chassis - made larger for better visibility
        const chassisGeometry = new THREE.BoxGeometry(3, 0.8, 4)
        const chassisMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333,
          roughness: 0.3,
          metalness: 0.8,
        })
        const chassis = new THREE.Mesh(chassisGeometry, chassisMaterial)
        chassis.position.y = 0.8
        chassis.castShadow = true
        robotGroup.add(chassis)

        // Wheels - made larger
        const wheelGeometry = new THREE.CylinderGeometry(0.6, 0.6, 0.5, 16)
        const wheelMaterial = new THREE.MeshStandardMaterial({
          color: 0x111111,
          roughness: 0.7,
          metalness: 0.3,
        })

        // Front left wheel
        const wheelFL = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelFL.rotation.z = Math.PI / 2
        wheelFL.position.set(-1.8, 0.6, 1.5)
        wheelFL.castShadow = true
        robotGroup.add(wheelFL)

        // Front right wheel
        const wheelFR = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelFR.rotation.z = Math.PI / 2
        wheelFR.position.set(1.8, 0.6, 1.5)
        wheelFR.castShadow = true
        robotGroup.add(wheelFR)

        // Back left wheel
        const wheelBL = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelBL.rotation.z = Math.PI / 2
        wheelBL.position.set(-1.8, 0.6, -1.5)
        wheelBL.castShadow = true
        robotGroup.add(wheelBL)

        // Back right wheel
        const wheelBR = new THREE.Mesh(wheelGeometry, wheelMaterial)
        wheelBR.rotation.z = Math.PI / 2
        wheelBR.position.set(1.8, 0.6, -1.5)
        wheelBR.castShadow = true
        robotGroup.add(wheelBR)

        // Weapon (spinning blade) - made larger and more prominent
        const bladeGeometry = new THREE.BoxGeometry(5, 0.4, 0.8)
        const bladeMaterial = new THREE.MeshStandardMaterial({
          color: 0xff7300,
          roughness: 0.2,
          metalness: 0.9,
          emissive: 0xff7300,
          emissiveIntensity: 1.0,
        })
        const blade = new THREE.Mesh(bladeGeometry, bladeMaterial)
        blade.position.set(0, 1.8, 0)
        blade.castShadow = true
        robotGroup.add(blade)

        // Top armor - made larger
        const armorGeometry = new THREE.BoxGeometry(2.5, 0.5, 3.2)
        const armorMaterial = new THREE.MeshStandardMaterial({
          color: 0xff9d00,
          roughness: 0.5,
          metalness: 0.7,
        })
        const armor = new THREE.Mesh(armorGeometry, armorMaterial)
        armor.position.set(0, 1.3, 0)
        armor.castShadow = true
        robotGroup.add(armor)

        // Orange lights - made larger and more prominent
        const lightGeometry = new THREE.SphereGeometry(0.15, 16, 16)
        const orangeLightMaterial = new THREE.MeshStandardMaterial({
          color: 0xff7300,
          emissive: 0xff7300,
          emissiveIntensity: 1.5,
        })

        const light1 = new THREE.Mesh(lightGeometry, orangeLightMaterial)
        light1.position.set(0.8, 1.6, 1.2)
        robotGroup.add(light1)

        const light2 = new THREE.Mesh(lightGeometry, orangeLightMaterial)
        light2.position.set(-0.8, 1.6, 1.2)
        robotGroup.add(light2)

        // Animation loop
        let bladeRotation = 0
        const animate = () => {
          requestAnimationFrame(animate)

          // Rotate the blade faster for more dramatic effect
          const rotationSpeed = 0.15
          bladeRotation += rotationSpeed
          blade.rotation.y = bladeRotation

          // Pulse the lights more dramatically
          const pulseValue = Math.abs(Math.sin(Date.now() * 0.004))
          orangeLightMaterial.emissiveIntensity = pulseValue * 2 + 0.5
          bladeMaterial.emissiveIntensity = pulseValue * 0.5 + 0.8

          controls.update()
          renderer.render(scene, camera)
        }

        animate()

        // Handle window resize
        const handleResize = () => {
          if (!container) return

          const newWidth = container.clientWidth
          const newHeight = container.clientHeight

          camera.aspect = newWidth / newHeight
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, newHeight)
        }

        window.addEventListener("resize", handleResize)

        // Cleanup
        return () => {
          window.removeEventListener("resize", handleResize)

          if (container && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement)
          }
          // Dispose of geometries and materials
          ;[chassisGeometry, wheelGeometry, bladeGeometry, armorGeometry, lightGeometry, floorGeometry].forEach(
            (geometry) => {
              geometry.dispose()
            },
          )
          ;[chassisMaterial, wheelMaterial, bladeMaterial, armorMaterial, orangeLightMaterial, floorMaterial].forEach(
            (material) => {
              material.dispose()
            },
          )

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
