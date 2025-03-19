"use client"

import { FoodCard } from "./food-card"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Grid, List, Star, Minus, Plus, Heart } from "lucide-react"

const foodItems = [
  {
    image: "/placeholder.svg?height=160&width=320&text=Vegetable+Salad",
    title: "Tasty Vegetable Salad Healthy Diet",
    price: 35.98,
    discount: 20,
    type: "Veg",
    rating: 4.8,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Meat+Burger",
    title: "Original Chess Meat Burger With Chips",
    price: 47.98,
    type: "Non Veg",
    rating: 4.6,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Tacos+Salsa",
    title: "Tacos Salsa With Chickens Grilled",
    price: 29.98,
    type: "Non Veg",
    rating: 4.3,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Orange+Juice",
    title: "Fresh Orange Juice With Basil Seed",
    price: 25.98,
    type: "Veg",
    rating: 4.9,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Sushi+Maki",
    title: "Meat Sushi Maki With Tuna, Ship And Other",
    price: 19.98,
    type: "Non Veg",
    rating: 4.7,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Veg+Burger",
    title: "Original Chess Burger With French Fries",
    price: 21.18,
    discount: 20,
    type: "Veg",
    rating: 4.5,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Jollof+Rice",
    title: "Nigerian Jollof Rice with Grilled Chicken",
    price: 32.5,
    type: "Non Veg",
    rating: 4.9,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Egusi+Soup",
    title: "Traditional Egusi Soup with Pounded Yam",
    price: 28.75,
    type: "Non Veg",
    rating: 4.8,
  },
  {
    image: "/placeholder.svg?height=160&width=320&text=Suya",
    title: "Spicy Beef Suya with Onions and Tomatoes",
    price: 18.4,
    type: "Non Veg",
    rating: 4.7,
  },
]

export function FoodGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold dark:text-white">Menu Items</h2>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "secondary" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            className="dark:border-gray-700"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "secondary" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            className="dark:border-gray-700"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white dark:bg-gray-800 p-3 rounded-lg border dark:border-gray-700"
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{item.rating}</span>
                </div>
                <h3 className="text-sm font-medium mb-1 dark:text-white">{item.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    ₦{(item.price * 500).toLocaleString()}
                  </span>
                  {item.discount && (
                    <span className="text-xs bg-yellow-400 text-black px-1 rounded">{item.discount}% Off</span>
                  )}
                  <div className="flex items-center gap-1 ml-auto">
                    <span
                      className={`w-2 h-2 rounded-full ${item.type === "Veg" ? "bg-green-500" : "bg-red-500"}`}
                    ></span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.type}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full h-7 dark:border-gray-600 dark:bg-gray-700"
                  >
                    <Minus className="h-3 w-3 mr-1" />
                    <span>1</span>
                    <Plus className="h-3 w-3 ml-1" />
                  </Button>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

