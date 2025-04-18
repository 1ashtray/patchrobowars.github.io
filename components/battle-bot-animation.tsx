"use client"

import { useRef } from "react"

export function BattleBotAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return <div ref={containerRef} className="absolute inset-0 bg-gradient-to-b from-black to-gray-900" />
}
