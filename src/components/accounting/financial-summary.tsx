import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, CreditCard, DollarSign, PiggyBank, ArrowUpRight, ArrowDownRight } from "lucide-react"

export function FinancialSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
            <TrendingUp className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Revenue</p>
            <h3 className="text-2xl font-bold dark:text-white">₦856,450</h3>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+12.5% from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
            <CreditCard className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Expenses</p>
            <h3 className="text-2xl font-bold dark:text-white">₦321,780</h3>
            <div className="flex items-center text-xs text-red-500">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              <span>+8.3% from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Net Profit</p>
            <h3 className="text-2xl font-bold dark:text-white">₦534,670</h3>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+15.2% from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mr-4">
            <PiggyBank className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Average Order</p>
            <h3 className="text-2xl font-bold dark:text-white">₦5,820</h3>
            <div className="flex items-center text-xs text-green-500">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              <span>+3.7% from last month</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

