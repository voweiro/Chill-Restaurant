"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RestaurantProfile } from "./restaurant-profile"
import { UserManagement } from "@/components//settings/user-management"
import { TaxSettings } from "@/components/settings/tax-settings"
import { MenuSettings } from "./menu-settings"
import { PaymentSettings } from "./payment-settings"
import { ReceiptSettings } from "./receipt-settings"
import { NotificationSettings } from "./notification-settings"
import { BackupSettings } from "./backup-settings"
import { Store, Users, Receipt, Bell, Save, FileText, CreditCard, Percent } from "lucide-react"

export function SettingsTabs() {
  return (
    <Tabs defaultValue="profile">
      <TabsList className="grid grid-cols-4 md:grid-cols-8 mb-4">
        <TabsTrigger
          value="profile"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <Store className="h-4 w-4" />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger
          value="users"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <Users className="h-4 w-4" />
          <span>Users</span>
        </TabsTrigger>
        <TabsTrigger
          value="menu"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <FileText className="h-4 w-4" />
          <span>Menu</span>
        </TabsTrigger>
        <TabsTrigger
          value="tax"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <Percent className="h-4 w-4" />
          <span>Tax</span>
        </TabsTrigger>
        <TabsTrigger
          value="payment"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <CreditCard className="h-4 w-4" />
          <span>Payment</span>
        </TabsTrigger>
        <TabsTrigger
          value="receipt"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <Receipt className="h-4 w-4" />
          <span>Receipt</span>
        </TabsTrigger>
        <TabsTrigger
          value="notifications"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <Bell className="h-4 w-4" />
          <span>Notifications</span>
        </TabsTrigger>
        <TabsTrigger
          value="backup"
          className="flex gap-1 flex-col h-16 data-[state=active]:border-b-2 data-[state=active]:border-primary"
        >
          <Save className="h-4 w-4" />
          <span>Backup</span>
        </TabsTrigger>
      </TabsList>

      <Card className="dark:bg-gray-900 dark:border-gray-800 p-4">
        <TabsContent value="profile" className="m-0">
          <RestaurantProfile />
        </TabsContent>

        <TabsContent value="users" className="m-0">
          <UserManagement />
        </TabsContent>

        <TabsContent value="menu" className="m-0">
          <MenuSettings />
        </TabsContent>

        <TabsContent value="tax" className="m-0">
          <TaxSettings />
        </TabsContent>

        <TabsContent value="payment" className="m-0">
          <PaymentSettings />
        </TabsContent>

        <TabsContent value="receipt" className="m-0">
          <ReceiptSettings />
        </TabsContent>

        <TabsContent value="notifications" className="m-0">
          <NotificationSettings />
        </TabsContent>

        <TabsContent value="backup" className="m-0">
          <BackupSettings />
        </TabsContent>
      </Card>
    </Tabs>
  )
}

