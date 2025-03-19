"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, MoreHorizontal, Phone, Plus, UserCheck, UserX } from "lucide-react"

const riders = [
  {
    id: 1,
    name: "David Miller",
    phone: "+1 (555) 123-4567",
    status: "active",
    activeOrders: 2,
    completedToday: 5,
    location: "Cityville Downtown",
  },
  {
    id: 2,
    name: "Sarah Lee",
    phone: "+1 (555) 234-5678",
    status: "active",
    activeOrders: 1,
    completedToday: 4,
    location: "Eastside District",
  },
  {
    id: 3,
    name: "Marcus Peters",
    phone: "+1 (555) 345-6789",
    status: "active",
    activeOrders: 1,
    completedToday: 3,
    location: "North Suburb",
  },
  {
    id: 4,
    name: "Jennifer Wu",
    phone: "+1 (555) 456-7890",
    status: "break",
    activeOrders: 0,
    completedToday: 2,
    location: "Central Plaza",
  },
  {
    id: 5,
    name: "Michael Johnson",
    phone: "+1 (555) 567-8901",
    status: "offline",
    activeOrders: 0,
    completedToday: 6,
    location: "Not Available",
  },
]

export function DeliveryRiders() {
  const [showAddRider, setShowAddRider] = useState(false)

  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg dark:text-white">Delivery Riders</CardTitle>
          <Dialog open={showAddRider} onOpenChange={setShowAddRider}>
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Add Rider
              </Button>
            </DialogTrigger>
            <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
              <DialogHeader>
                <DialogTitle className="dark:text-white">Add New Rider</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rider-name" className="dark:text-gray-300">
                      Full Name
                    </Label>
                    <Input id="rider-name" placeholder="Enter name" className="dark:bg-gray-800 dark:border-gray-700" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rider-phone" className="dark:text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="rider-phone"
                      placeholder="+1 (555) 123-4567"
                      className="dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rider-status" className="dark:text-gray-300">
                    Initial Status
                  </Label>
                  <Select defaultValue="active">
                    <SelectTrigger id="rider-status" className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="break">On Break</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="rider-location" className="dark:text-gray-300">
                    Current Location
                  </Label>
                  <Input
                    id="rider-location"
                    placeholder="Enter location"
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowAddRider(false)}
                  className="dark:border-gray-700 dark:text-gray-300"
                >
                  Cancel
                </Button>
                <Button onClick={() => setShowAddRider(false)}>Add Rider</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {riders.map((rider) => (
            <div
              key={rider.id}
              className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    rider.status === "active"
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : rider.status === "break"
                        ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                  }`}
                >
                  {rider.status === "active" ? <UserCheck className="h-5 w-5" /> : <UserX className="h-5 w-5" />}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium dark:text-white">{rider.name}</h3>
                    <RiderStatusBadge status={rider.status} />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Phone className="h-3 w-3 mr-1" />
                      <span>{rider.phone}</span>
                    </div>

                    {rider.status !== "offline" && (
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{rider.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-right mr-2">
                  <div className="text-sm font-medium dark:text-white">{rider.activeOrders} active</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{rider.completedToday} completed today</div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Information</DropdownMenuItem>
                    <DropdownMenuItem>View Assigned Orders</DropdownMenuItem>
                    <DropdownMenuItem>Send Notification</DropdownMenuItem>
                    <DropdownMenuItem>Change Status</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function RiderStatusBadge({ status }: { status: string }) {
  const statusConfig = {
    active: {
      color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
      label: "Active",
    },
    break: {
      color: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800",
      label: "On Break",
    },
    offline: {
      color: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700",
      label: "Offline",
    },
  }

  const config = statusConfig[status as keyof typeof statusConfig]

  return (
    <Badge variant="outline" className={config.color}>
      {config.label}
    </Badge>
  )
}

