"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, Filter, Download, Printer, Grid3X3 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export function TableActions() {
  const [showAddTable, setShowAddTable] = useState(false)

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
            <Filter className="h-4 w-4 mr-1" />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>All Tables</DropdownMenuItem>
          <DropdownMenuItem>Available Tables</DropdownMenuItem>
          <DropdownMenuItem>Occupied Tables</DropdownMenuItem>
          <DropdownMenuItem>Reserved Tables</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
            <Grid3X3 className="h-4 w-4 mr-1" />
            Layout
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Main Dining</DropdownMenuItem>
          <DropdownMenuItem>Bar Area</DropdownMenuItem>
          <DropdownMenuItem>Outdoor Patio</DropdownMenuItem>
          <DropdownMenuItem>Private Room</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
        <Printer className="h-4 w-4 mr-1" />
        Print
      </Button>

      <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
        <Download className="h-4 w-4 mr-1" />
        Export
      </Button>

      <Dialog open={showAddTable} onOpenChange={setShowAddTable}>
        <DialogTrigger asChild>
          <Button size="sm" className="h-9">
            <PlusCircle className="h-4 w-4 mr-1" />
            Add Table
          </Button>
        </DialogTrigger>
        <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="dark:text-white">Add New Table</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="table-number" className="dark:text-gray-300">
                  Table Number
                </Label>
                <Input id="table-number" placeholder="T13" className="dark:bg-gray-800 dark:border-gray-700" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity" className="dark:text-gray-300">
                  Capacity
                </Label>
                <Input id="capacity" type="number" defaultValue={4} className="dark:bg-gray-800 dark:border-gray-700" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="dark:text-gray-300">
                Location
              </Label>
              <Select>
                <SelectTrigger id="location" className="dark:bg-gray-800 dark:border-gray-700">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main">Main Dining</SelectItem>
                  <SelectItem value="bar">Bar Area</SelectItem>
                  <SelectItem value="outdoor">Outdoor Patio</SelectItem>
                  <SelectItem value="private">Private Room</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status" className="dark:text-gray-300">
                Initial Status
              </Label>
              <Select defaultValue="available">
                <SelectTrigger id="status" className="dark:bg-gray-800 dark:border-gray-700">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="occupied">Occupied</SelectItem>
                  <SelectItem value="reserved">Reserved</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowAddTable(false)}
              className="dark:border-gray-700 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button onClick={() => setShowAddTable(false)}>Add Table</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

