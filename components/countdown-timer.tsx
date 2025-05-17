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
      try {
        const targetTime = targetDate instanceof Date ? targetDate.getTime() : new Date(targetDate).getTime()
        const difference = targetTime - new Date().getTime()

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
      } catch (error) {
        console.error("Error calculating time left:", error)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-1 text-center">
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-white">{timeLeft.days}</span>
        <span className="text-xs text-gray-400">Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-white">{timeLeft.hours}</span>
        <span className="text-xs text-gray-400">Hours</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-white">{timeLeft.minutes}</span>
        <span className="text-xs text-gray-400">Min</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-bold text-white">{timeLeft.seconds}</span>
        <span className="text-xs text-gray-400">Sec</span>
      </div>
    </div>
  )
}
