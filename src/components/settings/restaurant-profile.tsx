"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, MapPin, Clock, Store, Phone, Globe, Mail } from "lucide-react"

export function RestaurantProfile() {
  const [formState, setFormState] = useState({
    name: "Chili Restaurant",
    address: "123 Main Street, Lagos, Nigeria",
    phone: "+234 123 456 7890",
    email: "contact@chilirestaurant.com",
    website: "www.chilirestaurant.com",
    description: "A family restaurant serving authentic Nigerian and international cuisine since 2005.",
    openingHours: {
      monday: { from: "08:00", to: "22:00", closed: false },
      tuesday: { from: "08:00", to: "22:00", closed: false },
      wednesday: { from: "08:00", to: "22:00", closed: false },
      thursday: { from: "08:00", to: "22:00", closed: false },
      friday: { from: "08:00", to: "23:00", closed: false },
      saturday: { from: "10:00", to: "23:00", closed: false },
      sunday: { from: "10:00", to: "22:00", closed: false },
    },
    timezone: "Africa/Lagos",
    currency: "NGN",
    logo: "/logo.png",
    isAcceptingOnlineReservations: true,
    isAcceptingOnlineOrders: true,
  })

  const handleInputChange = (field: string, value: any) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleTimeChange = (day: string, field: "from" | "to", value: string) => {
    setFormState((prev) => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: {
          ...prev.openingHours[day as keyof typeof prev.openingHours],
          [field]: value,
        },
      },
    }))
  }

  const handleClosedChange = (day: string, value: boolean) => {
    setFormState((prev) => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: {
          ...prev.openingHours[day as keyof typeof prev.openingHours],
          closed: value,
        },
      },
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Restaurant Profile</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          This information will be displayed on receipts, online listings, and other customer-facing materials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        <div className="space-y-2">
          <Label htmlFor="restaurant-name" className="dark:text-gray-300">
            Restaurant Name
          </Label>
          <div className="relative">
            <Store className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="restaurant-name"
              className="pl-9 dark:bg-gray-800 dark:border-gray-700"
              value={formState.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurant-address" className="dark:text-gray-300">
            Address
          </Label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="restaurant-address"
              className="pl-9 dark:bg-gray-800 dark:border-gray-700"
              value={formState.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurant-phone" className="dark:text-gray-300">
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="restaurant-phone"
              className="pl-9 dark:bg-gray-800 dark:border-gray-700"
              value={formState.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurant-email" className="dark:text-gray-300">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="restaurant-email"
              className="pl-9 dark:bg-gray-800 dark:border-gray-700"
              value={formState.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurant-website" className="dark:text-gray-300">
            Website
          </Label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              id="restaurant-website"
              className="pl-9 dark:bg-gray-800 dark:border-gray-700"
              value={formState.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="restaurant-timezone" className="dark:text-gray-300">
            Timezone
          </Label>
          <Select value={formState.timezone} onValueChange={(value) => handleInputChange("timezone", value)}>
            <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Africa/Lagos">Africa/Lagos (GMT+1)</SelectItem>
              <SelectItem value="Africa/Abidjan">Africa/Abidjan (GMT+0)</SelectItem>
              <SelectItem value="Africa/Cairo">Africa/Cairo (GMT+2)</SelectItem>
              <SelectItem value="Africa/Nairobi">Africa/Nairobi (GMT+3)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="restaurant-description" className="dark:text-gray-300">
          Description
        </Label>
        <Textarea
          id="restaurant-description"
          className="dark:bg-gray-800 dark:border-gray-700"
          rows={3}
          value={formState.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>

      <div>
        <h3 className="text-md font-medium mb-4 dark:text-white">Opening Hours</h3>
        <div className="space-y-3">
          {(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const).map((day) => (
            <div key={day} className="flex items-center gap-4">
              <div className="w-28 text-sm dark:text-gray-300 capitalize">{day}</div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={!formState.openingHours[day].closed}
                  onCheckedChange={(checked) => handleClosedChange(day, !checked)}
                />
                <span className="text-sm dark:text-gray-400">
                  {formState.openingHours[day].closed ? "Closed" : "Open"}
                </span>
              </div>

              {!formState.openingHours[day].closed && (
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="time"
                      className="pl-9 dark:bg-gray-800 dark:border-gray-700"
                      value={formState.openingHours[day].from}
                      onChange={(e) => handleTimeChange(day, "from", e.target.value)}
                    />
                  </div>
                  <span className="text-sm dark:text-gray-400">to</span>
                  <Input
                    type="time"
                    className="dark:bg-gray-800 dark:border-gray-700"
                    value={formState.openingHours[day].to}
                    onChange={(e) => handleTimeChange(day, "to", e.target.value)}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-md font-medium mb-2 dark:text-white">Online Services</h3>
        <div className="flex items-center gap-2">
          <Switch
            checked={formState.isAcceptingOnlineReservations}
            onCheckedChange={(checked) => handleInputChange("isAcceptingOnlineReservations", checked)}
          />
          <Label htmlFor="online-reservations" className="dark:text-gray-300">
            Accept Online Reservations
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Switch
            checked={formState.isAcceptingOnlineOrders}
            onCheckedChange={(checked) => handleInputChange("isAcceptingOnlineOrders", checked)}
          />
          <Label htmlFor="online-orders" className="dark:text-gray-300">
            Accept Online Orders
          </Label>
        </div>
      </div>

      <div className="pt-4 border-t dark:border-gray-700 flex justify-end">
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}

