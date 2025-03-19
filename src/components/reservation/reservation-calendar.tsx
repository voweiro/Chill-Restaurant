"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ReservationCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<"calendar" | "day">("calendar");

  // Sample reservation data
  const reservationCounts: Record<string, number> = {
    "2025-01-15": 3,
    "2025-01-16": 5,
    "2025-01-17": 8,
    "2025-01-18": 12,
    "2025-01-19": 7,
    "2025-01-20": 2,
    "2025-01-21": 4,
  };

  // Sample time slots with reservation counts
  const timeSlots = [
    { time: "12:00", total: 8, reserved: 3 },
    { time: "12:30", total: 8, reserved: 2 },
    { time: "13:00", total: 8, reserved: 8 },
    { time: "13:30", total: 8, reserved: 7 },
    { time: "14:00", total: 8, reserved: 5 },
    { time: "14:30", total: 8, reserved: 3 },
    { time: "18:00", total: 10, reserved: 2 },
    { time: "18:30", total: 10, reserved: 4 },
    { time: "19:00", total: 10, reserved: 10 },
    { time: "19:30", total: 10, reserved: 8 },
    { time: "20:00", total: 10, reserved: 6 },
    { time: "20:30", total: 10, reserved: 2 },
    { time: "21:00", total: 10, reserved: 1 },
  ];

  // Format date as YYYY-MM-DD for lookup
  const formatDateKey = (date: Date) => date.toISOString().split("T")[0];

  const formatDisplayDate = (date: Date) =>
    new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);

  return (
    <Card className="p-4 dark:bg-gray-900 dark:border-gray-800">
      {view === "calendar" ? (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold dark:text-white">Reservation Calendar</h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="dark:border-gray-700 dark:text-gray-300"
                onClick={() => setDate(new Date())}
              >
                Today
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="dark:border-gray-700 dark:text-gray-300"
                onClick={() => date && setView("day")}
              >
                Day View
              </Button>
            </div>
          </div>

          {/* Calendar Component */}
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border dark:border-gray-700 dark:text-white"
          />
        </>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" onClick={() => setView("calendar")}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="font-semibold dark:text-white">{date && formatDisplayDate(date)}</h2>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Prev
              </Button>
              <Button variant="outline" size="sm" className="dark:border-gray-700 dark:text-gray-300">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium dark:text-gray-300">Lunch Service</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {timeSlots.slice(0, 6).map((slot, index) => (
                <TimeSlot key={index} {...slot} />
              ))}
            </div>

            <h3 className="text-sm font-medium mt-4 dark:text-gray-300">Dinner Service</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {timeSlots.slice(6).map((slot, index) => (
                <TimeSlot key={index + 6} {...slot} />
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
}

interface TimeSlotProps {
  time: string;
  total: number;
  reserved: number;
}

function TimeSlot({ time, total, reserved }: TimeSlotProps) {
  const available = total - reserved;
  const isFull = available === 0;

  return (
    <div
      className={`p-2 rounded-md border text-center cursor-pointer ${
        isFull
          ? "bg-gray-100 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
          : "bg-white border-gray-200 hover:border-green-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-green-500"
      }`}
    >
      <div className="text-sm font-medium dark:text-white">{time}</div>
      <div className="flex items-center justify-center mt-1 text-xs">
        <Users className="h-3 w-3 mr-1 text-gray-500 dark:text-gray-400" />
        <span
          className={`${
            isFull
              ? "text-red-500 dark:text-red-400"
              : available <= 2
                ? "text-orange-500 dark:text-orange-400"
                : "text-green-500 dark:text-green-400"
          }`}
        >
          {available}/{total}
        </span>
      </div>
    </div>
  );
}
