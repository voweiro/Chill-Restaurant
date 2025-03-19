"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Heart, Star } from "lucide-react"
import { useState } from "react"

interface FoodCardProps {
  image: string
  title: string
  price: number
  discount?: number
  type: "Veg" | "Non Veg"
  rating?: number
}

export function FoodCard({ image, title, price, discount, type, rating = 4.5 }: FoodCardProps) {
  const [quantity, setQuantity] = useState(1)
  const [favorite, setFavorite] = useState(false)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <Card className="overflow-hidden border dark:border-gray-700 food-card-hover">
      <div className="relative">
        <img src={image || "/placeholder.svg?height=160&width=320"} alt={title} className="w-full h-40 object-cover" />
        {discount && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-md text-xs font-medium">
            {discount}% Off
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 dark:bg-black/50 rounded-full h-8 w-8"
          onClick={() => setFavorite(!favorite)}
        >
          <Heart className={`h-4 w-4 ${favorite ? "fill-red-500 text-red-500" : ""}`} />
        </Button>
      </div>
      <div className="p-3 dark:bg-gray-800">
        <div className="flex items-center gap-1 mb-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
        <h3 className="text-sm font-medium mb-1 dark:text-white">{title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-green-600 dark:text-green-400 font-bold">₦{(price * 500).toLocaleString()}</span>
          <div className="flex items-center gap-1">
            <span className={`w-2 h-2 rounded-full ${type === "Veg" ? "bg-green-500" : "bg-red-500"}`}></span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{type}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:border-gray-600 dark:bg-gray-700"
            onClick={decreaseQuantity}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="font-medium dark:text-white">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full dark:border-gray-600 dark:bg-gray-700"
            onClick={increaseQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

