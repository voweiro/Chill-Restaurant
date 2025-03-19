"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Volume2 } from "lucide-react"

export function NotificationSettings() {
  const [activeTab, setActiveTab] = useState("app")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Notification Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Configure how and when you receive notifications.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="app">In-App Notifications</TabsTrigger>
          <TabsTrigger value="email">Email Notifications</TabsTrigger>
          <TabsTrigger value="sms">SMS Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="app" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="dark:text-gray-300">Enable in-app notifications</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications within the POS system</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="dark:text-gray-300">Play notification sounds</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Play sounds for important notifications</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notification-volume" className="dark:text-gray-300">
              Notification Volume
            </Label>
            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                id="notification-volume"
                type="range"
                min="0"
                max="100"
                defaultValue="80"
                className="dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>

          <h3 className="text-md font-medium mt-6 dark:text-white">Notification Events</h3>

          <div className="space-y-3">
            {[
              { id: 1, event: "New Order", description: "When a new order is placed", enabled: true },
              { id: 2, event: "Order Ready", description: "When an order is ready for pickup/service", enabled: true },
              { id: 3, event: "Order Completed", description: "When an order is completed", enabled: true },
              { id: 4, event: "Low Inventory", description: "When inventory items are running low", enabled: true },
              { id: 5, event: "New Reservation", description: "When a new reservation is made", enabled: true },
              { id: 6, event: "Staff Login", description: "When staff members log in", enabled: false },
              { id: 7, event: "Daily Summary", description: "Daily sales and performance summary", enabled: true },
            ].map((notification) => (
              <div
                key={notification.id}
                className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium dark:text-white">{notification.event}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.description}</p>
                </div>
                <Switch checked={notification.enabled} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="dark:text-gray-300">Enable email notifications</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-recipients" className="dark:text-gray-300">
              Email Recipients
            </Label>
            <Input
              id="email-recipients"
              placeholder="Enter email addresses (comma separated)"
              defaultValue="manager@chilirestaurant.com, owner@chilirestaurant.com"
              className="dark:bg-gray-800 dark:border-gray-700"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Enter comma-separated email addresses to receive notifications
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email-frequency" className="dark:text-gray-300">
              Email Frequency
            </Label>
            <Select defaultValue="immediate">
              <SelectTrigger id="email-frequency" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate</SelectItem>
                <SelectItem value="hourly">Hourly Digest</SelectItem>
                <SelectItem value="daily">Daily Digest</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <h3 className="text-md font-medium mt-6 dark:text-white">Email Notification Events</h3>

          <div className="space-y-3">
            {[
              { id: 1, event: "Daily Sales Report", description: "Daily summary of sales and revenue", enabled: true },
              { id: 2, event: "Inventory Alerts", description: "When inventory items are running low", enabled: true },
              { id: 3, event: "Large Orders", description: "When large orders are placed", enabled: true },
              { id: 4, event: "Staff Performance", description: "Weekly staff performance reports", enabled: false },
              { id: 5, event: "Customer Feedback", description: "When customers leave feedback", enabled: true },
            ].map((notification) => (
              <div
                key={notification.id}
                className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium dark:text-white">{notification.event}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.description}</p>
                </div>
                <Switch checked={notification.enabled} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sms" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="dark:text-gray-300">Enable SMS notifications</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via SMS</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sms-recipients" className="dark:text-gray-300">
              SMS Recipients
            </Label>
            <Input
              id="sms-recipients"
              placeholder="Enter phone numbers (comma separated)"
              className="dark:bg-gray-800 dark:border-gray-700"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Enter comma-separated phone numbers to receive notifications
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sms-provider" className="dark:text-gray-300">
              SMS Provider
            </Label>
            <Select defaultValue="twilio">
              <SelectTrigger id="sms-provider" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select SMS provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twilio">Twilio</SelectItem>
                <SelectItem value="nexmo">Nexmo</SelectItem>
                <SelectItem value="africastalking">Africa's Talking</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <h3 className="text-md font-medium mt-6 dark:text-white">SMS Notification Events</h3>

          <div className="space-y-3">
            {[
              { id: 1, event: "Critical Alerts", description: "Only the most important notifications", enabled: true },
              { id: 2, event: "Daily Summary", description: "End of day sales summary", enabled: true },
              { id: 3, event: "Large Orders", description: "When large orders are placed", enabled: false },
            ].map((notification) => (
              <div
                key={notification.id}
                className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium dark:text-white">{notification.event}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{notification.description}</p>
                </div>
                <Switch checked={notification.enabled} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="pt-4 border-t dark:border-gray-700 flex justify-end">
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}

