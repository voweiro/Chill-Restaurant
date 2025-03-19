"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

// Simulated data - in a real app this would come from your backend
const revenueData = {
  daily: [
    { name: "Mon", revenue: 42000, expenses: 21500, profit: 20500 },
    { name: "Tue", revenue: 38000, expenses: 19800, profit: 18200 },
    { name: "Wed", revenue: 45000, expenses: 22300, profit: 22700 },
    { name: "Thu", revenue: 51000, expenses: 24200, profit: 26800 },
    { name: "Fri", revenue: 68000, expenses: 28500, profit: 39500 },
    { name: "Sat", revenue: 72000, expenses: 31200, profit: 40800 },
    { name: "Sun", revenue: 58000, expenses: 26800, profit: 31200 },
  ],
  weekly: [
    { name: "Week 1", revenue: 284000, expenses: 142000, profit: 142000 },
    { name: "Week 2", revenue: 312000, expenses: 155000, profit: 157000 },
    { name: "Week 3", revenue: 296000, expenses: 148000, profit: 148000 },
    { name: "Week 4", revenue: 342000, expenses: 161000, profit: 181000 },
  ],
  monthly: [
    { name: "Jan", revenue: 1250000, expenses: 620000, profit: 630000 },
    { name: "Feb", revenue: 1180000, expenses: 590000, profit: 590000 },
    { name: "Mar", revenue: 1320000, expenses: 650000, profit: 670000 },
    { name: "Apr", revenue: 1420000, expenses: 710000, profit: 710000 },
    { name: "May", revenue: 1380000, expenses: 690000, profit: 690000 },
    { name: "Jun", revenue: 1520000, expenses: 760000, profit: 760000 },
  ],
}

export function RevenueChart() {
  const [timeRange, setTimeRange] = useState("daily")
  const [chartType, setChartType] = useState("bar")

  // Format the naira amount for the tooltip
  const formatNaira = (value: number) => `₦${value.toLocaleString()}`

  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg dark:text-white">Revenue Overview</CardTitle>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {timeRange === "daily" ? "Last 7 days" : timeRange === "weekly" ? "Last 4 weeks" : "Last 6 months"}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Tabs value={timeRange} onValueChange={setTimeRange} className="w-[300px]">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>

            <Button
              variant="outline"
              size="sm"
              className={chartType === "bar" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
              onClick={() => setChartType("bar")}
            >
              Bar
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={chartType === "line" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
              onClick={() => setChartType("line")}
            >
              Line
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full mt-4">
          <div className="mb-4 flex gap-4 justify-center">
            <div className="flex items-center">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800 mr-2">
                &nbsp;
              </Badge>
              <span className="text-sm dark:text-gray-300">Revenue</span>
            </div>
            <div className="flex items-center">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800 mr-2">
                &nbsp;
              </Badge>
              <span className="text-sm dark:text-gray-300">Expenses</span>
            </div>
            <div className="flex items-center">
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800 mr-2">
                &nbsp;
              </Badge>
              <span className="text-sm dark:text-gray-300">Profit</span>
            </div>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            {chartType === "bar" ? (
              <BarChart
                data={revenueData[timeRange as keyof typeof revenueData]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
                <XAxis dataKey="name" className="text-xs text-gray-500 dark:text-gray-400" />
                <YAxis
                  className="text-xs text-gray-500 dark:text-gray-400"
                  tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(value: number) => [formatNaira(value)]}
                  contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#e5e7eb" }}
                  labelStyle={{ color: "#e5e7eb" }}
                />
                <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expenses" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profit" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            ) : (
              <LineChart
                data={revenueData[timeRange as keyof typeof revenueData]}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
                <XAxis dataKey="name" className="text-xs text-gray-500 dark:text-gray-400" />
                <YAxis
                  className="text-xs text-gray-500 dark:text-gray-400"
                  tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip
                  formatter={(value: number) => [formatNaira(value)]}
                  contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#e5e7eb" }}
                  labelStyle={{ color: "#e5e7eb" }}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="expenses" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="profit" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

