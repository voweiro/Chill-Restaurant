"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Plus, Trash2 } from "lucide-react"

export function TaxSettings() {
  const [taxRates, setTaxRates] = useState([
    { id: 1, name: "VAT", rate: 7.5, enabled: true, applyToAll: true },
    { id: 2, name: "Service Charge", rate: 5, enabled: true, applyToAll: false },
    { id: 3, name: "Local Tax", rate: 2, enabled: false, applyToAll: false },
  ])

  const addTaxRate = () => {
    const newId = Math.max(...taxRates.map((tax) => tax.id)) + 1
    setTaxRates([...taxRates, { id: newId, name: "", rate: 0, enabled: true, applyToAll: false }])
  }

  const removeTaxRate = (id: number) => {
    setTaxRates(taxRates.filter((tax) => tax.id !== id))
  }

  const updateTaxRate = (id: number, field: string, value: any) => {
    setTaxRates(taxRates.map((tax) => (tax.id === id ? { ...tax, [field]: value } : tax)))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Tax & Pricing Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Configure tax rates and pricing settings for your restaurant.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-medium dark:text-white">Tax Rates</h3>
          <Button onClick={addTaxRate} variant="outline" size="sm" className="dark:border-gray-700">
            <Plus className="h-4 w-4 mr-1" />
            Add Tax Rate
          </Button>
        </div>

        <div className="space-y-3">
          {taxRates.map((tax) => (
            <div
              key={tax.id}
              className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`tax-name-${tax.id}`} className="dark:text-gray-300">
                    Tax Name
                  </Label>
                  <Input
                    id={`tax-name-${tax.id}`}
                    value={tax.name}
                    onChange={(e) => updateTaxRate(tax.id, "name", e.target.value)}
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor={`tax-rate-${tax.id}`} className="dark:text-gray-300">
                    Rate (%)
                  </Label>
                  <Input
                    id={`tax-rate-${tax.id}`}
                    type="number"
                    value={tax.rate}
                    onChange={(e) => updateTaxRate(tax.id, "rate", Number.parseFloat(e.target.value))}
                    className="dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={tax.enabled}
                    onCheckedChange={(checked) => updateTaxRate(tax.id, "enabled", checked)}
                  />
                  <Label className="dark:text-gray-300">Enabled</Label>
                </div>

                <div className="flex items-center gap-2">
                  <Switch
                    checked={tax.applyToAll}
                    onCheckedChange={(checked) => updateTaxRate(tax.id, "applyToAll", checked)}
                  />
                  <Label className="dark:text-gray-300">Apply to all items</Label>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeTaxRate(tax.id)}
                  className="text-red-500 dark:text-red-400"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-md font-medium dark:text-white">Price Display Settings</h3>

        <div className="space-y-2">
          <Label htmlFor="price-display" className="dark:text-gray-300">
            Price Display Format
          </Label>
          <Select defaultValue="tax-exclusive">
            <SelectTrigger id="price-display" className="dark:bg-gray-800 dark:border-gray-700">
              <SelectValue placeholder="Select price display format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tax-inclusive">Tax Inclusive</SelectItem>
              <SelectItem value="tax-exclusive">Tax Exclusive</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Tax inclusive shows prices with tax included. Tax exclusive shows prices without tax.
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency-symbol" className="dark:text-gray-300">
            Currency Symbol
          </Label>
          <Select defaultValue="naira">
            <SelectTrigger id="currency-symbol" className="dark:bg-gray-800 dark:border-gray-700">
              <SelectValue placeholder="Select currency symbol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="naira">₦ (Naira)</SelectItem>
              <SelectItem value="dollar">$ (Dollar)</SelectItem>
              <SelectItem value="euro">€ (Euro)</SelectItem>
              <SelectItem value="pound">£ (Pound)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="currency-position" className="dark:text-gray-300">
            Currency Symbol Position
          </Label>
          <Select defaultValue="before">
            <SelectTrigger id="currency-position" className="dark:bg-gray-800 dark:border-gray-700">
              <SelectValue placeholder="Select currency position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="before">Before amount (₦100)</SelectItem>
              <SelectItem value="after">After amount (100₦)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Switch defaultChecked />
          <Label className="dark:text-gray-300">Show decimal places</Label>
        </div>

        <div className="flex items-center gap-2">
          <Switch defaultChecked />
          <Label className="dark:text-gray-300">Use thousand separators</Label>
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

