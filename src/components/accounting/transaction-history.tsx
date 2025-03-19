"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Search,
  Filter,
  ArrowDown,
  ArrowUp,
  CreditCard,
  Banknote,
  ArrowRight,
  Download,
  Calendar,
  MoreHorizontal,
} from "lucide-react"

// Sample transaction data
const transactions = [
  {
    id: "TXN-2023",
    date: "Jan 15, 2025",
    description: "Daily Sales Revenue",
    type: "income",
    amount: 58450,
    category: "Sales",
    paymentMethod: "Multiple",
  },
  {
    id: "TXN-2022",
    date: "Jan 15, 2025",
    description: "Ingredient Purchase - Vegetables",
    type: "expense",
    amount: 12350,
    category: "Inventory",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN-2021",
    date: "Jan 14, 2025",
    description: "Utility Bill - Electricity",
    type: "expense",
    amount: 8500,
    category: "Utilities",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN-2020",
    date: "Jan 14, 2025",
    description: "Daily Sales Revenue",
    type: "income",
    amount: 62100,
    category: "Sales",
    paymentMethod: "Multiple",
  },
  {
    id: "TXN-2019",
    date: "Jan 13, 2025",
    description: "Staff Salary - Kitchen Staff",
    type: "expense",
    amount: 45000,
    category: "Payroll",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN-2018",
    date: "Jan 13, 2025",
    description: "Catering Service Revenue",
    type: "income",
    amount: 85000,
    category: "Catering",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN-2017",
    date: "Jan 12, 2025",
    description: "Equipment Repair - Oven",
    type: "expense",
    amount: 12800,
    category: "Maintenance",
    paymentMethod: "Cash",
  },
]

export function TransactionHistory() {
  const [filter, setFilter] = useState<"all" | "income" | "expense">("all")

  const filteredTransactions = filter === "all" ? transactions : transactions.filter((t) => t.type === filter)

  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg dark:text-white">Transaction History</CardTitle>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search transactions..."
                className="pl-9 h-9 w-[180px] dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              className={filter === "all" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
              onClick={() => setFilter("all")}
            >
              All
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={filter === "income" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
              onClick={() => setFilter("income")}
            >
              Income
            </Button>
            <Button
              variant="outline"
              size="sm"
              className={filter === "expense" ? "bg-primary text-primary-foreground" : "dark:border-gray-700"}
              onClick={() => setFilter("expense")}
            >
              Expenses
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
                  <Filter className="h-4 w-4 mr-1" />
                  More Filters
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Filter by Date</DropdownMenuItem>
                <DropdownMenuItem>Filter by Category</DropdownMenuItem>
                <DropdownMenuItem>Filter by Payment Method</DropdownMenuItem>
                <DropdownMenuItem>Filter by Amount</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" className="h-9 dark:border-gray-700">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="p-3 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    transaction.type === "income"
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {transaction.type === "income" ? <ArrowDown className="h-5 w-5" /> : <ArrowUp className="h-5 w-5" />}
                </div>

                <div>
                  <h3 className="font-medium dark:text-white">{transaction.description}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{transaction.date}</span>
                    </div>
                    <div className="flex items-center">
                      {transaction.paymentMethod.includes("Cash") ? (
                        <Banknote className="h-3 w-3 mr-1" />
                      ) : transaction.paymentMethod.includes("Card") ||
                        transaction.paymentMethod.includes("Transfer") ? (
                        <CreditCard className="h-3 w-3 mr-1" />
                      ) : (
                        <ArrowRight className="h-3 w-3 mr-1" />
                      )}
                      <span>{transaction.paymentMethod}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex flex-col items-end mr-2">
                  <span
                    className={`font-bold ${
                      transaction.type === "income"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {transaction.type === "income" ? "+" : "-"}₦{transaction.amount.toLocaleString()}
                  </span>
                  <Badge
                    variant="outline"
                    className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                  >
                    {transaction.category}
                  </Badge>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Transaction</DropdownMenuItem>
                    <DropdownMenuItem>Print Receipt</DropdownMenuItem>
                    <DropdownMenuItem>Categorize</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500 dark:text-red-400">Delete Transaction</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

