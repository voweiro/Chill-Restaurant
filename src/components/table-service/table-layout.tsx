"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Edit2, Users, Clock, UserPlus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Table data with different statuses
const tables = [
  { id: 1, number: "T1", capacity: 4, status: "available", location: "main" },
  {
    id: 2,
    number: "T2",
    capacity: 2,
    status: "occupied",
    timeElapsed: "45m",
    customers: 2,
    server: "John D.",
    location: "main",
  },
  {
    id: 3,
    number: "T3",
    capacity: 6,
    status: "reserved",
    reservationTime: "14:30",
    customerName: "Williams",
    location: "main",
  },
  {
    id: 4,
    number: "T4",
    capacity: 8,
    status: "occupied",
    timeElapsed: "1h 20m",
    customers: 7,
    server: "Sarah M.",
    location: "main",
  },
  {
    id: 5,
    number: "T5",
    capacity: 4,
    status: "occupied",
    timeElapsed: "25m",
    customers: 3,
    server: "John D.",
    location: "main",
  },
  { id: 6, number: "B1", capacity: 2, status: "cleaning", location: "bar" },
  { id: 7, number: "B2", capacity: 2, status: "available", location: "bar" },
  {
    id: 8,
    number: "B3",
    capacity: 2,
    status: "occupied",
    timeElapsed: "50m",
    customers: 1,
    server: "Mary J.",
    location: "bar",
  },
  { id: 9, number: "O1", capacity: 6, status: "available", location: "outdoor" },
  {
    id: 10,
    number: "O2",
    capacity: 4,
    status: "reserved",
    reservationTime: "18:00",
    customerName: "Johnson",
    location: "outdoor",
  },
  {
    id: 11,
    number: "O3",
    capacity: 4,
    status: "occupied",
    timeElapsed: "10m",
    customers: 4,
    server: "Sarah M.",
    location: "outdoor",
  },
  { id: 12, number: "P1", capacity: 10, status: "available", location: "private" },
]

export function TableLayout() {
  const [selectedTable, setSelectedTable] = useState<number | null>(null)
  const [view, setView] = useState("list")

  return (
    <Card className="p-4 flex-1 dark:bg-gray-900 dark:border-gray-800 overflow-hidden flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="main">Main</TabsTrigger>
            <TabsTrigger value="bar">Bar</TabsTrigger>
            <TabsTrigger value="outdoor">Outdoor</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className={view === "list" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
            onClick={() => setView("list")}
          >
            List
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={view === "grid" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
            onClick={() => setView("grid")}
          >
            Grid
          </Button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 overflow-y-auto">
          {tables.map((table) => (
            <div
              key={table.id}
              className={`aspect-square rounded-xl border p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                selectedTable === table.id ? "border-primary border-2" : "dark:border-gray-700"
              } ${
                table.status === "available"
                  ? "bg-green-50 dark:bg-green-900/20"
                  : table.status === "occupied"
                    ? "bg-orange-50 dark:bg-orange-900/20"
                    : table.status === "reserved"
                      ? "bg-blue-50 dark:bg-blue-900/20"
                      : "bg-gray-50 dark:bg-gray-800/50"
              } hover:shadow-md`}
              onClick={() => setSelectedTable(table.id)}
            >
              <div className="text-xl font-bold mb-1 dark:text-white">{table.number}</div>
              <div className="flex items-center justify-center mb-1">
                <Users className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
                <span className="text-xs dark:text-gray-300">{table.capacity}</span>
              </div>
              <Badge
                variant="outline"
                className={`
                  ${
                    table.status === "available"
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                      : table.status === "occupied"
                        ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800"
                        : table.status === "reserved"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                  }
                `}
              >
                {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
              </Badge>

              {table.status === "occupied" && (
                <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {table.timeElapsed}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {tables.map((table) => (
              <div
                key={table.id}
                className={`p-3 rounded-lg border flex justify-between items-center cursor-pointer ${
                  selectedTable === table.id ? "border-primary border-2" : "dark:border-gray-700"
                } ${
                  table.status === "available"
                    ? "bg-green-50 dark:bg-green-900/20"
                    : table.status === "occupied"
                      ? "bg-orange-50 dark:bg-orange-900/20"
                      : table.status === "reserved"
                        ? "bg-blue-50 dark:bg-blue-900/20"
                        : "bg-gray-50 dark:bg-gray-800/50"
                } hover:shadow-md transition-all duration-200`}
                onClick={() => setSelectedTable(table.id)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-white"
                    style={{
                      backgroundColor:
                        table.status === "available"
                          ? "#22c55e"
                          : table.status === "occupied"
                            ? "#f97316"
                            : table.status === "reserved"
                              ? "#3b82f6"
                              : "#6b7280",
                    }}
                  >
                    {table.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium dark:text-white">Table {table.number}</span>
                      <Badge
                        variant="outline"
                        className={`
                          ${
                            table.status === "available"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                              : table.status === "occupied"
                                ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800"
                                : table.status === "reserved"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                          }
                        `}
                      >
                        {table.status.charAt(0).toUpperCase() + table.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{table.capacity}</span>
                      </div>

                      {table.status === "occupied" && (
                        <>
                          <span>•</span>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{table.timeElapsed}</span>
                          </div>
                          <span>•</span>
                          <span>Server: {table.server}</span>
                        </>
                      )}

                      {table.status === "reserved" && (
                        <>
                          <span>•</span>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{table.reservationTime}</span>
                          </div>
                          <span>•</span>
                          <span>{table.customerName}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {table.status === "available" && (
                    <Button size="sm" className="h-8">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Seat
                    </Button>
                  )}

                  {table.status === "occupied" && (
                    <Button size="sm" variant="outline" className="h-8 dark:border-gray-700">
                      View Order
                    </Button>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Table</DropdownMenuItem>
                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                      <DropdownMenuItem>Merge Tables</DropdownMenuItem>
                      <DropdownMenuItem>Print QR Code</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  )
}

