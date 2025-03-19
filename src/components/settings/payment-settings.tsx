"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, CreditCard, Banknote, QrCode, Wallet, Plus, Trash2 } from "lucide-react"

export function PaymentSettings() {
  const [activeTab, setActiveTab] = useState("methods")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Payment Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Configure payment methods and processing settings.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="processors">Payment Processors</TabsTrigger>
          <TabsTrigger value="options">Payment Options</TabsTrigger>
        </TabsList>

        <TabsContent value="methods" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium dark:text-white">Available Payment Methods</h3>
            <Button variant="outline" size="sm" className="dark:border-gray-700">
              <Plus className="h-4 w-4 mr-1" />
              Add Method
            </Button>
          </div>

          <div className="space-y-3">
            {[
              { id: 1, name: "Cash", icon: Banknote, enabled: true },
              { id: 2, name: "Credit/Debit Card", icon: CreditCard, enabled: true },
              { id: 3, name: "Bank Transfer", icon: QrCode, enabled: true },
              { id: 4, name: "Mobile Payment", icon: Wallet, enabled: false },
            ].map((method) => (
              <div
                key={method.id}
                className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">{method.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {method.enabled ? "Enabled for all transactions" : "Currently disabled"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch checked={method.enabled} />
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 dark:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="processors" className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Payment Processor Settings</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Card Payment Processor</h4>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="card-processor" className="dark:text-gray-300">
                    Processor
                  </Label>
                  <Select defaultValue="stripe">
                    <SelectTrigger id="card-processor" className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectValue placeholder="Select processor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stripe">Stripe</SelectItem>
                      <SelectItem value="paystack">Paystack</SelectItem>
                      <SelectItem value="flutterwave">Flutterwave</SelectItem>
                      <SelectItem value="manual">Manual Processing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="api-key" className="dark:text-gray-300">
                    API Key
                  </Label>
                  <Input
                    id="api-key"
                    type="password"
                    placeholder="Enter API key"
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhook-url" className="dark:text-gray-300">
                    Webhook URL
                  </Label>
                  <Input
                    id="webhook-url"
                    placeholder="https://your-domain.com/webhook"
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <QrCode className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">Bank Transfer Processor</h4>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="bank-name" className="dark:text-gray-300">
                    Bank Name
                  </Label>
                  <Input
                    id="bank-name"
                    placeholder="Enter bank name"
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="account-number" className="dark:text-gray-300">
                    Account Number
                  </Label>
                  <Input
                    id="account-number"
                    placeholder="Enter account number"
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="account-name" className="dark:text-gray-300">
                    Account Name
                  </Label>
                  <Input
                    id="account-name"
                    placeholder="Enter account name"
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="options" className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Payment Options</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Allow split payments</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Allow customers to pay using multiple payment methods
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Require payment before order</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Require payment to be completed before order is processed
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Allow partial payments</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Allow customers to make partial payments</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Enable tipping</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Allow customers to add tips to their orders</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-tip" className="dark:text-gray-300">
                Default Tip Percentages
              </Label>
              <Input
                id="default-tip"
                placeholder="5,10,15,20"
                defaultValue="5,10,15,20"
                className="dark:bg-gray-800 dark:border-gray-700"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Enter comma-separated percentages for tip options
              </p>
            </div>
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

