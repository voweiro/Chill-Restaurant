"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Clock, MapPin, MoreHorizontal, Phone, Search, Printer, User, Filter, ArrowUpDown } from "lucide-react"

const orders = [
  {
    id: "ORD-5621",
    customer: "Jane Cooper",
    address: "123 Main St, Cityville",
    phone: "+1 (555) 123-4567",
    items: 4,
    total: 18750,
    status: "preparing",
    estimatedTime: "25-30 min",
    assignedTo: "David M.",
  },
  {
    id: "ORD-5620",
    customer: "Robert Johnson",
    address: "456 Oak Ave, Townsburg",
    phone: "+1 (555) 234-5678",
    items: 2,
    total: 8450,
    status: "ready",
    estimatedTime: "5-10 min",
    assignedTo: "Pending Assignment",
  },
  {
    id: "ORD-5619",
    customer: "Emily Wilson",
    address: "789 Pine Rd, Villageton",
    phone: "+1 (555) 345-6789",
    items: 3,
    total: 15200,
    status: "out-for-delivery",
    estimatedTime: "10-15 min",
    assignedTo: "Marcus P.",
  },
  {
    id: "ORD-5618",
    customer: "Michael Brown",
    address: "101 Elm Blvd, Hamletville",
    phone: "+1 (555) 456-7890",
    items: 1,
    total: 4500,
    status: "out-for-delivery",
    estimatedTime: "5-10 min",
    assignedTo: "Sarah L.",
  },
  {
    id: "ORD-5617",
    customer: "Sophia Martinez",
    address: "202 Cedar Ln, Boroughton",
    phone: "+1 (555) 567-8901",
    items: 5,
    total: 24350,
    status: "delivered",
    estimatedTime: "Delivered 15:45",
    assignedTo: "David M.",
  },
  {
    id: "ORD-5616",
    customer: "William Taylor",
    address: "303 Birch Ct, Districtville",
    phone: "+1 (555) 678-9012",
    items: 2,
    total: 9800,
    status: "delivered",
    estimatedTime: "Delivered 15:32",
    assignedTo: "Sarah L.",
  },
]

export function DeliveryOrders() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg dark:text-white">Delivery Orders</CardTitle>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search orders..."
                className="pl-9 h-9 w-[180px] dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All Orders</DropdownMenuItem>
                <DropdownMenuItem>Preparing</DropdownMenuItem>
                <DropdownMenuItem>Ready for Pickup</DropdownMenuItem>
                <DropdownMenuItem>Out for Delivery</DropdownMenuItem>
                <DropdownMenuItem>Delivered</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
                  <ArrowUpDown className="h-4 w-4 mr-1" />
                  Sort
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Newest First</DropdownMenuItem>
                <DropdownMenuItem>Oldest First</DropdownMenuItem>
                <DropdownMenuItem>Closest First</DropdownMenuItem>
                <DropdownMenuItem>Highest Amount</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="preparing">Preparing</TabsTrigger>
            <TabsTrigger value="ready">Ready</TabsTrigger>
            <TabsTrigger value="delivering">Delivering</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 m-0">
            {orders.map((order) => (
              <DeliveryOrderCard key={order.id} order={order} />
            ))}
          </TabsContent>

          <TabsContent value="preparing" className="space-y-3 m-0">
            {orders
              .filter((order) => order.status === "preparing")
              .map((order) => (
                <DeliveryOrderCard key={order.id} order={order} />
              ))}
          </TabsContent>

          <TabsContent value="ready" className="space-y-3 m-0">
            {orders
              .filter((order) => order.status === "ready")
              .map((order) => (
                <DeliveryOrderCard key={order.id} order={order} />
              ))}
          </TabsContent>

          <TabsContent value="delivering" className="space-y-3 m-0">
            {orders
              .filter((order) => order.status === "out-for-delivery")
              .map((order) => (
                <DeliveryOrderCard key={order.id} order={order} />
              ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-3 m-0">
            {orders
              .filter((order) => order.status === "delivered")
              .map((order) => (
                <DeliveryOrderCard key={order.id} order={order} />
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function DeliveryOrderCard({ order }: { order: any }) {
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex flex-col sm:flex-row justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
          <User className="h-5 w-5" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium dark:text-white">{order.customer}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">{order.id}</div>
            <OrderStatusBadge status={order.status} />
          </div>

          <div className="space-y-1 text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="truncate">{order.address}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Phone className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>{order.phone}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>{order.estimatedTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:items-end justify-between gap-2">
        <div className="flex gap-1 sm:justify-end">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Printer className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Edit Order</DropdownMenuItem>
              <DropdownMenuItem>Assign Rider</DropdownMenuItem>
              <DropdownMenuItem>Track Delivery</DropdownMenuItem>
              <DropdownMenuItem>Contact Customer</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="text-right">
          <div className="text-lg font-bold text-green-600 dark:text-green-400">₦{order.total.toLocaleString()}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {order.items} items • {order.assignedTo}
          </div>
        </div>

        {order.status === "ready" && (
          <Button size="sm" className="mt-2 w-full sm:w-auto">
            Assign Rider
          </Button>
        )}
      </div>
    </div>
  )
}

function OrderStatusBadge({ status }: { status: string }) {
  const statusConfig = {
    preparing: {
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
      label: "Preparing",
    },
    ready: {
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
      label: "Ready for Pickup",
    },
    "out-for-delivery": {
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800",
      label: "Out for Delivery",
    },
    delivered: {
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
      label: "Delivered",
    },
  }

  const config = statusConfig[status as keyof typeof statusConfig]

  return (
    <Badge variant="outline" className={config.color}>
      {config.label}
    </Badge>
  )
}

