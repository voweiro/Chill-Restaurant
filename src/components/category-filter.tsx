"use client"

import { Grid, Coffee, Soup, UtensilsCrossed, ChefHat, Sandwich, Pizza, IceCream, Wine } from "lucide-react"
import { useState } from "react"

const categories = [
  { icon: Grid, label: "All", items: "235 Items", active: true },
  { icon: Coffee, label: "Breakfast", items: "19 Items" },
  { icon: Soup, label: "Soups", items: "8 Items" },
  { icon: UtensilsCrossed, label: "Pasta", items: "14 Items" },
  { icon: ChefHat, label: "Main Course", items: "27 Items" },
  { icon: Sandwich, label: "Burgers", items: "13 Items" },
  { icon: Pizza, label: "Pizza", items: "9 Items" },
  { icon: IceCream, label: "Desserts", items: "16 Items" },
  { icon: Wine, label: "Drinks", items: "22 Items" },
]

export function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="flex gap-3 mb-4 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col items-center p-3 rounded-xl min-w-[100px] ${
            index === activeCategory
              ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              : "bg-white dark:bg-gray-800 dark:text-gray-300"
          } border dark:border-gray-700 cursor-pointer hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-200 food-card-hover`}
          onClick={() => setActiveCategory(index)}
        >
          <category.icon className="h-6 w-6 mb-1" />
          <span className="text-sm font-medium">{category.label}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{category.items}</span>
        </div>
      ))}
    </div>
  )
}

