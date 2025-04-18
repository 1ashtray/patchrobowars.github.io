"use client"

import { useRef } from "react"

export function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
