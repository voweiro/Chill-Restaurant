"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const modes = ["Dine in", "Take Away", "Delivery"]

export function DiningMode() {
  const [activeMode, setActiveMode] = useState(0)

  return (
    <div className="flex gap-2 mb-4">
      {modes.map((mode, index) => (
        <Button
          key={index}
          variant={index === activeMode ? "secondary" : "ghost"}
          className={`rounded-full ${
            index === activeMode
              ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              : "dark:text-gray-300"
          }`}
          onClick={() => setActiveMode(index)}
        >
          {mode}
        </Button>
      ))}
    </div>
  )
}

