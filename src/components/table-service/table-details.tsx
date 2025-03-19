"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import {
  Users,
  Clock,
  CreditCard,
  UtensilsCrossed,
  ClipboardCheck,
  UserPlus,
  Printer,
  MessageSquare,
  ChevronRight,
  AlertCircle,
  Check,
} from "lucide-react"

export function TableDetails() {
  const [activeTab, setActiveTab] = useState("details")

  return (
    <Card className="w-[380px] dark:bg-gray-900 dark:border-gray-800 flex flex-col overflow-hidden">
      <CardHeader className="border-b dark:border-gray-800 py-3 px-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold dark:text-white flex items-center">
            Table T4
            <Badge status="occupied" className="ml-2" />
          </CardTitle>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Printer className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col">
        <TabsList className="grid grid-cols-2 p-0 bg-transparent h-12">
          <TabsTrigger
            value="details"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Details
          </TabsTrigger>
          <TabsTrigger
            value="order"
            className="rounded-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary"
          >
            Order
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="flex-1 m-0 overflow-auto p-4">
          <div className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium dark:text-white">Current Session</h3>
                <div className="flex items-center text-orange-600 dark:text-orange-400 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>1h 20m</span>
                </div>
              </div>

              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Server:</span>
                <span className="dark:text-white">Sarah M.</span>
              </div>

              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Capacity:</span>
                <span className="dark:text-white">8 people</span>
              </div>

              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Current guests:</span>
                <span className="dark:text-white">7 people</span>
              </div>

              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600 dark:text-gray-400">Check opened:</span>
                <span className="dark:text-white">14:25 PM</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 dark:text-white">Guest Information</h3>
              <div className="space-y-2">
                <Input
                  placeholder="Guest name (optional)"
                  className="dark:bg-gray-800 dark:border-gray-700"
                  defaultValue="Floyd Miles"
                />
                <Input
                  placeholder="Phone number (optional)"
                  className="dark:bg-gray-800 dark:border-gray-700"
                  defaultValue="+1 (555) 123-4567"
                />
                <Input placeholder="Special requests" className="dark:bg-gray-800 dark:border-gray-700" />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 dark:text-white">Table Controls</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start dark:border-gray-700">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add Guest
                </Button>
                <Button variant="outline" className="justify-start dark:border-gray-700">
                  <Users className="h-4 w-4 mr-2" />
                  Merge Tables
                </Button>
                <Button variant="outline" className="justify-start dark:border-gray-700">
                  <ClipboardCheck className="h-4 w-4 mr-2" />
                  Change Status
                </Button>
                <Button variant="outline" className="justify-start dark:border-gray-700">
                  <UtensilsCrossed className="h-4 w-4 mr-2" />
                  Reassign
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2 dark:text-white">Table History</h3>
              <div className="space-y-2">
                <div className="text-sm p-2 rounded bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Table opened</span>
                    <span className="text-gray-500 dark:text-gray-400">14:25 PM</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">Server: Sarah M.</div>
                </div>

                <div className="text-sm p-2 rounded bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Order placed</span>
                    <span className="text-gray-500 dark:text-gray-400">14:32 PM</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">7 items - ₦24,500</div>
                </div>

                <div className="text-sm p-2 rounded bg-gray-50 dark:bg-gray-800">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300">Additional order</span>
                    <span className="text-gray-500 dark:text-gray-400">15:10 PM</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400">3 items - ₦7,800</div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="order" className="flex-1 m-0 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium dark:text-white">Current Order</h3>
                <Button variant="outline" size="sm" className="h-8 dark:border-gray-700">
                  <CreditCard className="h-4 w-4 mr-1" />
                  Checkout
                </Button>
              </div>

              <div className="space-y-2">
                {[
                  { name: "Spicy Beef Suya", qty: 2, price: 9200, status: "served" },
                  { name: "Jollof Rice with Grilled Chicken", qty: 3, price: 16250, status: "served" },
                  { name: "Fresh Orange Juice", qty: 2, price: 5196, status: "served" },
                  { name: "Chocolate Cake Slice", qty: 2, price: 4550, status: "cooking" },
                  { name: "Pepper Soup", qty: 1, price: 2800, status: "new" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium dark:text-white">{item.name}</span>
                        {item.status === "cooking" && <Badge status="cooking" />}
                        {item.status === "new" && <Badge status="new" />}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <span className="mr-2">Qty: {item.qty}</span>
                        <span>₦{item.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {item.status === "served" && <Check className="h-4 w-4 text-green-500" />}
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-lg border dark:border-gray-700">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="dark:text-white">₦37,996</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">VAT (7.5%)</span>
                  <span className="dark:text-white">₦2,850</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600 dark:text-gray-400">Service Charge (5%)</span>
                  <span className="dark:text-white">₦1,900</span>
                </div>
                <div className="flex justify-between pt-2 border-t dark:border-gray-700">
                  <span className="font-bold dark:text-white">Total</span>
                  <span className="font-bold text-green-600 dark:text-green-400">₦42,746</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t dark:border-gray-800">
            <Button className="w-full bg-green-600 hover:bg-green-700">Update Order</Button>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

interface BadgeProps {
  status: "occupied" | "available" | "reserved" | "cleaning" | "cooking" | "new"
  className?: string
}

function Badge({ status, className }: BadgeProps) {
  const colors = {
    occupied: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800",
    available: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    reserved: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
    cleaning: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700",
    cooking: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    new: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800",
  }

  const icon = {
    cooking: <Clock className="h-3 w-3 mr-1" />,
    new: <AlertCircle className="h-3 w-3 mr-1" />,
  }

  return (
    <div
      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors[status]} ${className}`}
    >
      {status === "cooking" || status === "new" ? icon[status] : null}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </div>
  )
}

