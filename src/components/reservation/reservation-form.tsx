"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, Users, Clock, X, Check, Phone } from "lucide-react"
import { format } from "date-fns"

export function ReservationForm() {
  const [date, setDate] = useState<Date>()
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    guests: "2",
    time: "",
    notes: "",
  })

  const timeSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ ...formState, date })
    // Reset form
    setFormState({
      name: "",
      phone: "",
      guests: "2",
      time: "",
      notes: "",
    })
    setDate(undefined)
  }

  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="text-xl dark:text-white">New Reservation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="dark:text-gray-300">
              Customer Name
            </Label>
            <Input
              id="name"
              placeholder="Enter customer name"
              className="dark:bg-gray-800 dark:border-gray-700"
              value={formState.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="dark:text-gray-300">
              Phone Number
            </Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="phone"
                placeholder="Enter phone number"
                className="pl-9 dark:bg-gray-800 dark:border-gray-700"
                value={formState.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="dark:text-gray-300">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal dark:bg-gray-800 dark:border-gray-700"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Select date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 dark:bg-gray-900 dark:border-gray-700">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="dark:text-gray-300">
                Time
              </Label>
              <Select value={formState.time} onValueChange={(value) => handleInputChange("time", value)}>
                <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-gray-400" />
                    <SelectValue placeholder="Select time" />
                  </div>
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-1">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time} className="cursor-pointer">
                        {time}
                      </SelectItem>
                    ))}
                  </div>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="dark:text-gray-300">
              Number of Guests
            </Label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Select value={formState.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                <SelectTrigger className="pl-9 dark:bg-gray-800 dark:border-gray-700">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent className="dark:bg-gray-900 dark:border-gray-700">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? "person" : "people"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="dark:text-gray-300">
              Special Notes
            </Label>
            <Textarea
              id="notes"
              placeholder="Enter any special requests or notes"
              className="dark:bg-gray-800 dark:border-gray-700"
              value={formState.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              className="flex-1 dark:border-gray-700 dark:text-gray-300"
              onClick={() => {
                setFormState({
                  name: "",
                  phone: "",
                  guests: "2",
                  time: "",
                  notes: "",
                })
                setDate(undefined)
              }}
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
            <Button type="submit" className="flex-1">
              <Check className="h-4 w-4 mr-1" />
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

