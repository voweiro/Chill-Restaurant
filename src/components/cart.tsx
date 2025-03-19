"use client"

import { Button } from "@/components/ui/button"
import { CreditCard, QrCode, Banknote, Edit2, Trash2, MessageSquare, Plus, X, Minus } from "lucide-react"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const cartItems = [
  { id: 1, title: "Original Chess Meat Burger With Chips (Non Veg)", price: 47.98, quantity: 1 },
  { id: 2, title: "Fresh Orange Juice With Basil Seed No Sugar (Veg)", price: 25.98, quantity: 1 },
  { id: 3, title: "Meat Sushi Maki With Tuna, Ship And Other (Non Veg)", price: 19.98, quantity: 1 },
  { id: 4, title: "Tacos Salsa With Chickens Grilled", price: 29.98, quantity: 1 },
]

export function Cart() {
  const [items, setItems] = useState(cartItems)
  const [orderNote, setOrderNote] = useState("")
  const [showNoteInput, setShowNoteInput] = useState(false)

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.075 // 7.5% VAT in Nigeria
  const serviceCharge = subtotal * 0.05 // 5% service charge
  const total = subtotal + tax + serviceCharge

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  return (
    <div className="w-[380px] bg-white dark:bg-gray-900 border-l dark:border-gray-800 flex flex-col h-full">
      <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold dark:text-white">Table 4</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Floyd Miles</p>
        </div>
        <Button variant="ghost" size="icon">
          <Edit2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="p-4 border-b dark:border-gray-800">
        <div className="flex gap-2 mb-4">
          <Button variant="secondary" className="flex-1 rounded-full">
            Dine in
          </Button>
          <Button variant="outline" className="flex-1 rounded-full dark:border-gray-700 dark:text-gray-300">
            Take Away
          </Button>
          <Button variant="outline" className="flex-1 rounded-full dark:border-gray-700 dark:text-gray-300">
            Delivery
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {items.length > 0 ? (
          <>
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 mb-4 group">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium dark:text-white">{item.title}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-green-600 dark:text-green-400 font-bold">
                      ₦{(item.price * 500).toLocaleString()}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.quantity}X</span>
                      <button
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}

            {showNoteInput ? (
              <div className="mb-4 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 h-6 w-6"
                  onClick={() => setShowNoteInput(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <h4 className="text-sm font-medium mb-2 dark:text-white">Add Note</h4>
                <Textarea
                  placeholder="Add special instructions..."
                  className="text-sm dark:bg-gray-700 dark:border-gray-600"
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                />
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full mb-4 dark:border-gray-700 dark:text-gray-300"
                onClick={() => setShowNoteInput(true)}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Add Note
              </Button>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <img
              src="/placeholder.svg?height=120&width=120&text=Empty+Cart"
              alt="Empty Cart"
              className="w-24 h-24 mb-4 opacity-50"
            />
            <h3 className="text-lg font-medium mb-1 dark:text-white">Your cart is empty</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Add items from the menu to get started</p>
            <Button>Browse Menu</Button>
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div className="border-t dark:border-gray-800 p-4">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Sub Total</span>
              <span className="dark:text-white">₦{(subtotal * 500).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">VAT (7.5%)</span>
              <span className="dark:text-white">₦{(tax * 500).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">Service Charge (5%)</span>
              <span className="dark:text-white">₦{(serviceCharge * 500).toLocaleString()}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t dark:border-gray-700">
              <span className="dark:text-white">Total Amount</span>
              <span className="text-green-600 dark:text-green-400">₦{(total * 500).toLocaleString()}</span>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full mb-4 dark:border-gray-700 dark:text-gray-300">
                Apply Discount/Promo
              </Button>
            </DialogTrigger>
            <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
              <DialogHeader>
                <DialogTitle className="dark:text-white">Apply Discount</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
                    10% Off
                  </Button>
                  <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
                    15% Off
                  </Button>
                  <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
                    20% Off
                  </Button>
                  <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
                    Custom
                  </Button>
                </div>
                <Input type="text" placeholder="Enter promo code" className="dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <DialogFooter>
                <Button variant="outline" className="dark:border-gray-700 dark:text-gray-300">
                  Cancel
                </Button>
                <Button>Apply</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button
              variant="outline"
              className="flex flex-col items-center py-2 dark:border-gray-700 dark:text-gray-300"
            >
              <Banknote className="h-5 w-5 mb-1" />
              <span className="text-xs">Cash</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center py-2 dark:border-gray-700 dark:text-gray-300"
            >
              <CreditCard className="h-5 w-5 mb-1" />
              <span className="text-xs">Card</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center py-2 dark:border-gray-700 dark:text-gray-300"
            >
              <QrCode className="h-5 w-5 mb-1" />
              <span className="text-xs">Transfer</span>
            </Button>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700 text-white h-12">Place Order</Button>
        </div>
      )}
    </div>
  )
}

