"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-2 text-center">
      <div className="flex flex-col">
        <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.days}</span>
        <span className="text-xs text-gray-400">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.hours}</span>
        <span className="text-xs text-gray-400">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-400">Minutes</span>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-4xl font-bold text-white">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-400">Seconds</span>
      </div>
    </div>
  )
}
