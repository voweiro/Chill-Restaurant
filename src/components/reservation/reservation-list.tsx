"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Clock, Calendar, Users, Phone, MoreHorizontal, UserCheck, X, Check } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

// Sample reservation data
const reservations = [
  {
    id: 1,
    customerName: "Jane Cooper",
    phone: "+1 (555) 123-4567",
    date: "Jan 16, 2025",
    time: "19:00",
    guests: 4,
    status: "confirmed",
    table: "T5",
    notes: "Birthday celebration, window seat if possible.",
  },
  {
    id: 2,
    customerName: "Wade Warren",
    phone: "+1 (555) 234-5678",
    date: "Jan 16, 2025",
    time: "19:30",
    guests: 2,
    status: "pending",
    notes: "",
  },
  {
    id: 3,
    customerName: "Esther Howard",
    phone: "+1 (555) 345-6789",
    date: "Jan 16, 2025",
    time: "20:00",
    guests: 6,
    status: "confirmed",
    table: "T8",
    notes: "Allergic to nuts.",
  },
  {
    id: 4,
    customerName: "Cameron Williamson",
    phone: "+1 (555) 456-7890",
    date: "Jan 16, 2025",
    time: "18:00",
    guests: 3,
    status: "confirmed",
    table: "T3",
    notes: "",
  },
  {
    id: 5,
    customerName: "Brooklyn Simmons",
    phone: "+1 (555) 567-8901",
    date: "Jan 16, 2025",
    time: "20:30",
    guests: 8,
    status: "canceled",
    notes: "Called to cancel due to illness.",
  },
]

export function ReservationList() {
  const [activeTab, setActiveTab] = useState("today")
  const [selectedReservation, setSelectedReservation] = useState<any>(null)
  const [showDetailsDialog, setShowDetailsDialog] = useState(false)

  return (
    <Card className="p-4 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold dark:text-white">Reservation List</h2>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search..." className="pl-9 h-9 w-[180px] dark:bg-gray-800 dark:border-gray-700" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
                <Filter className="h-4 w-4 mr-1" />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Reservations</DropdownMenuItem>
              <DropdownMenuItem>Confirmed</DropdownMenuItem>
              <DropdownMenuItem>Pending</DropdownMenuItem>
              <DropdownMenuItem>Canceled</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="today" className="space-y-3 m-0">
          {reservations.map((reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
              onViewDetails={() => {
                setSelectedReservation(reservation)
                setShowDetailsDialog(true)
              }}
            />
          ))}
        </TabsContent>

        <TabsContent value="upcoming" className="m-0">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center p-4">
            Showing reservations for future dates
          </p>
        </TabsContent>

        <TabsContent value="pending" className="m-0">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center p-4">
            Showing pending reservations that need confirmation
          </p>
        </TabsContent>

        <TabsContent value="history" className="m-0">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center p-4">Showing past reservations</p>
        </TabsContent>
      </Tabs>

      {selectedReservation && (
        <Dialog open={showDetailsDialog} onOpenChange={setShowDetailsDialog}>
          <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
            <DialogHeader>
              <DialogTitle className="dark:text-white">Reservation Details</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div className="flex justify-between">
                <div className="flex items-center">
                  <div className="rounded-full h-10 w-10 bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400 mr-3">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">{selectedReservation.customerName}</h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Phone className="h-3 w-3 mr-1" />
                      {selectedReservation.phone}
                    </div>
                  </div>
                </div>

                <StatusBadge status={selectedReservation.status} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                  <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium dark:text-white">Date</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{selectedReservation.date}</div>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                  <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium dark:text-white">Time</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{selectedReservation.time}</div>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                  <Users className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium dark:text-white">Guests</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{selectedReservation.guests} people</div>
                  </div>
                </div>

                <div className="flex items-center bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                  <div className="h-5 w-5 rounded-full bg-orange-400 flex items-center justify-center text-white font-medium mr-2">
                    {selectedReservation.table || "?"}
                  </div>
                  <div>
                    <div className="text-sm font-medium dark:text-white">Table</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {selectedReservation.table || "Not assigned"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="dark:text-gray-300">Special Notes</Label>
                <Textarea
                  className="dark:bg-gray-800 dark:border-gray-700"
                  defaultValue={selectedReservation.notes || "No notes provided"}
                  rows={3}
                />
              </div>
            </div>

            <DialogFooter>
              <div className="flex gap-2 w-full">
                <Button
                  variant="outline"
                  className="flex-1 dark:border-gray-700 dark:text-gray-300"
                  onClick={() => setShowDetailsDialog(false)}
                >
                  <X className="h-4 w-4 mr-1" />
                  Cancel
                </Button>
                <Button className="flex-1" onClick={() => setShowDetailsDialog(false)}>
                  <Check className="h-4 w-4 mr-1" />
                  Confirm
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Card>
  )
}

function ReservationItem({ reservation, onViewDetails }: { reservation: any; onViewDetails: () => void }) {
  return (
    <div className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-700 dark:text-green-400">
          <UserCheck className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium dark:text-white">{reservation.customerName}</h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-3 w-3 mr-1" />
            {reservation.time}
            <span className="mx-1">•</span>
            <Users className="h-3 w-3 mr-1" />
            {reservation.guests}
            {reservation.table && (
              <>
                <span className="mx-1">•</span>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-orange-400 flex items-center justify-center text-white text-[8px] font-bold mr-1">
                    {reservation.table}
                  </div>
                  <span>Table {reservation.table}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <StatusBadge status={reservation.status} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={onViewDetails}>View Details</DropdownMenuItem>
            <DropdownMenuItem>Edit Reservation</DropdownMenuItem>
            <DropdownMenuItem>Assign Table</DropdownMenuItem>
            <DropdownMenuItem>Send Confirmation</DropdownMenuItem>
            {reservation.status !== "canceled" && (
              <DropdownMenuItem className="text-red-500 dark:text-red-400">Cancel Reservation</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    confirmed: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
    canceled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  }

  return (
    <Badge variant="outline" className={`${colors[status as keyof typeof colors]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  )
}

