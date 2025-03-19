"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Save, Plus, Trash2, MoreHorizontal, Edit, ArrowUp, ArrowDown, Image } from "lucide-react"

export function MenuSettings() {
  const [activeTab, setActiveTab] = useState("categories")

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Menu Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Manage menu categories, items, and display settings.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="modifiers">Modifiers</TabsTrigger>
          <TabsTrigger value="display">Display Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium dark:text-white">Menu Categories</h3>
            <Button variant="outline" size="sm" className="dark:border-gray-700">
              <Plus className="h-4 w-4 mr-1" />
              Add Category
            </Button>
          </div>

          <div className="space-y-3">
            {[
              { id: 1, name: "Breakfast", items: 19, active: true, order: 1 },
              { id: 2, name: "Soups", items: 8, active: true, order: 2 },
              { id: 3, name: "Pasta", items: 14, active: true, order: 3 },
              { id: 4, name: "Main Course", items: 27, active: true, order: 4 },
              { id: 5, name: "Burgers", items: 13, active: true, order: 5 },
              { id: 6, name: "Pizza", items: 9, active: true, order: 6 },
              { id: 7, name: "Desserts", items: 16, active: true, order: 7 },
              { id: 8, name: "Drinks", items: 22, active: true, order: 8 },
              { id: 9, name: "Seasonal Specials", items: 5, active: false, order: 9 },
            ].map((category) => (
              <div
                key={category.id}
                className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-500 dark:text-gray-400">
                    {category.order}
                  </div>
                  <div>
                    <h4 className="font-medium dark:text-white">{category.name}</h4>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{category.items} items</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Switch checked={category.active} />

                  <div className="flex">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Category
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Image className="h-4 w-4 mr-2" />
                        Change Icon
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500 dark:text-red-400">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Category
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="modifiers" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium dark:text-white">Menu Modifiers</h3>
            <Button variant="outline" size="sm" className="dark:border-gray-700">
              <Plus className="h-4 w-4 mr-1" />
              Add Modifier Group
            </Button>
          </div>

          <div className="space-y-3">
            {[
              { id: 1, name: "Spice Level", options: 4, required: true },
              { id: 2, name: "Toppings", options: 8, required: false },
              { id: 3, name: "Sides", options: 6, required: true },
              { id: 4, name: "Drinks", options: 10, required: false },
              { id: 5, name: "Special Instructions", options: 0, required: false },
            ].map((modifier) => (
              <div
                key={modifier.id}
                className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
              >
                <div>
                  <h4 className="font-medium dark:text-white">{modifier.name}</h4>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {modifier.options} options • {modifier.required ? "Required" : "Optional"}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Modifier
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500 dark:text-red-400">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete Modifier
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="display" className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Menu Display Settings</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Show item images</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Display images for menu items</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Show item descriptions</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">Display descriptions for menu items</p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Show dietary indicators</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Display vegetarian, vegan, gluten-free indicators
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Show spice level indicators</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Display spice level indicators for spicy dishes
                </p>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Show out of stock items</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Display items that are currently out of stock
                </p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="dark:text-gray-300">Show popular items first</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Prioritize popular items in category listings
                </p>
              </div>
              <Switch defaultChecked />
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

