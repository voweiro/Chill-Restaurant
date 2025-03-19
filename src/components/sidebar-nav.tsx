"use client"

import {
  Menu,
  TableIcon as TableBar,
  CalendarRange,
  Truck,
  Calculator,
  Settings,
  LogOut,
  Home,
  Moon,
  Sun,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface SidebarNavProps {
  activeMenu?: string
}

const navItems = [
  { icon: Home, label: "Dashboard", color: "text-gray-600", href: "/" },
  { icon: Menu, label: "Menu", color: "text-green-600", href: "/" },
  { icon: TableBar, label: "Table Services", color: "text-gray-600", notifications: 3, href: "/table-service" },
  { icon: CalendarRange, label: "Reservation", color: "text-gray-600", href: "/reservation" },
  { icon: Truck, label: "Delivery", color: "text-gray-600", notifications: 2, href: "/delivery" },
  { icon: Calculator, label: "Accounting", color: "text-gray-600", href: "/accounting" },
  { icon: Settings, label: "Settings", color: "text-gray-600", href: "/settings" },
]

export function SidebarNav({ activeMenu = "Menu" }: SidebarNavProps) {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="w-64 p-4 border-r h-screen bg-white dark:bg-gray-900 dark:border-gray-800 flex flex-col">
      <div className="flex items-center gap-2 mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-12%20at%2012.32.42%20PM-QicgA83ZI0TfZlOynDOqlhOGnbwzEv.jpeg"
          alt="Chili POS Logo"
          className="w-8 h-8"
        />
        <span className="font-semibold dark:text-white">CHILI POS</span>
        <Button variant="ghost" size="icon" className="ml-auto" onClick={toggleDarkMode}>
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
            <img src="/placeholder.svg?height=40&width=40" alt="User" className="w-8 h-8 rounded-full" />
          </div>
          <div>
            <h3 className="font-medium text-sm dark:text-white">John Doe</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">Restaurant Manager</p>
          </div>
        </div>
      </div>

      <nav className="space-y-1 flex-1">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant={activeMenu === item.label ? "secondary" : "ghost"}
            className={`w-full justify-start ${activeMenu === item.label ? item.color : "dark:text-gray-300"} relative`}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
              {item.notifications && (
                <Badge variant="destructive" className="ml-auto badge-bounce">
                  {item.notifications}
                </Badge>
              )}
            </Link>
          </Button>
        ))}
      </nav>

      <div className="mt-auto pt-4 border-t dark:border-gray-800">
        <div className="bg-orange-50 dark:bg-orange-900/30 p-3 rounded-lg mb-4">
          <h4 className="text-sm font-medium mb-1 dark:text-white">Today's Summary</h4>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500 dark:text-gray-400">Orders:</span>
            <span className="font-medium dark:text-white">24</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-500 dark:text-gray-400">Revenue:</span>
            <span className="font-medium dark:text-white">₦45,320</span>
          </div>
        </div>

        <Button variant="ghost" className="w-full justify-start text-gray-600 dark:text-gray-300">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  )
}

