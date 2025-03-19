"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Printer } from "lucide-react"

export function ReceiptSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Receipt Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Customize receipt content and printing options.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Receipt Content</h3>

          <div className="space-y-2">
            <Label htmlFor="receipt-header" className="dark:text-gray-300">
              Receipt Header
            </Label>
            <Textarea
              id="receipt-header"
              placeholder="Enter header text"
              className="dark:bg-gray-800 dark:border-gray-700"
              defaultValue="Chili Restaurant\n123 Main Street, Lagos, Nigeria\nTel: +234 123 456 7890"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="receipt-footer" className="dark:text-gray-300">
              Receipt Footer
            </Label>
            <Textarea
              id="receipt-footer"
              placeholder="Enter footer text"
              className="dark:bg-gray-800 dark:border-gray-700"
              defaultValue="Thank you for dining with us!\nVisit us online at www.chilirestaurant.com"
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium dark:text-white">Receipt Items</h4>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show logo on receipt</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show order number</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show server name</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show table number</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show item prices</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show tax breakdown</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show payment method</Label>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <Label className="dark:text-gray-300">Show QR code</Label>
              <Switch defaultChecked />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="qr-code-content" className="dark:text-gray-300">
              QR Code Content
            </Label>
            <Select defaultValue="website">
              <SelectTrigger id="qr-code-content" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select QR code content" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="website">Restaurant Website</SelectItem>
                <SelectItem value="feedback">Customer Feedback Form</SelectItem>
                <SelectItem value="social">Social Media Profiles</SelectItem>
                <SelectItem value="menu">Digital Menu</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Printing Options</h3>

          <div className="space-y-2">
            <Label htmlFor="printer-type" className="dark:text-gray-300">
              Default Printer
            </Label>
            <Select defaultValue="thermal">
              <SelectTrigger id="printer-type" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select printer type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="thermal">Thermal Printer</SelectItem>
                <SelectItem value="inkjet">Inkjet Printer</SelectItem>
                <SelectItem value="laser">Laser Printer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="paper-size" className="dark:text-gray-300">
              Paper Size
            </Label>
            <Select defaultValue="80mm">
              <SelectTrigger id="paper-size" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select paper size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="58mm">58mm</SelectItem>
                <SelectItem value="80mm">80mm</SelectItem>
                <SelectItem value="a4">A4</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="font-size" className="dark:text-gray-300">
              Font Size
            </Label>
            <Select defaultValue="medium">
              <SelectTrigger id="font-size" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4 mt-6">
            <h4 className="text-sm font-medium dark:text-white">Printing Behavior</h4>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Auto-print receipts</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automatically print receipts when order is completed
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Print kitchen tickets</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Print tickets for kitchen staff</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Print duplicate receipts</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Print two copies of each receipt</p>
              </div>
              <Switch />
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <h4 className="text-sm font-medium dark:text-white">Digital Receipts</h4>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Enable email receipts</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Send receipts to customer email</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Enable SMS receipts</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Send receipts via SMS</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t dark:border-gray-700 flex justify-end">
        <Button variant="outline" className="mr-2 dark:border-gray-700 dark:text-gray-300">
          <Printer className="h-4 w-4 mr-1" />
          Print Test Receipt
        </Button>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}

