"use client"

import { useState, useEffect } from "react"
import { Bell, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  const [orders, setOrders] = useState([
    { id: 1, table: "T1", items: 6, kitchen: "Kitchen", status: "Process", time: "12:45" },
    { id: 2, table: "T2", items: 4, kitchen: "Kitchen", time: "12:30" },
    { id: 3, table: "T3", items: 3, kitchen: "Kitchen", time: "12:15" },
  ])

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 p-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium dark:text-white">{formatTime(currentTime)}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium dark:text-white">Active Orders:</span>
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
          >
            {orders.length}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className={`flex items-center gap-3 rounded-lg p-3 ${
              order.status === "Process"
                ? "bg-orange-50 dark:bg-orange-900/20 pulse-animation"
                : "bg-gray-50 dark:bg-gray-800/50"
            }`}
          >
            <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-medium">
              {order.table}
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium dark:text-white">
                  {order.items} Items → {order.kitchen}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {order.time}
                </span>
              </div>
              {order.status && (
                <div className="flex items-center gap-1 text-xs text-orange-600 dark:text-orange-400">
                  <Bell className="h-3 w-3" />
                  {order.status}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

