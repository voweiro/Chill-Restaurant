import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, Users, ShoppingBag, CreditCard } from "lucide-react"

export function DashboardSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card className="dark:border-gray-800 dark:bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium dark:text-gray-200">Total Revenue</CardTitle>
          <ShoppingBag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold dark:text-white">₦245,500</div>
          <div className="flex items-center pt-1">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-green-500">+12.5%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">from yesterday</span>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:border-gray-800 dark:bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium dark:text-gray-200">Total Orders</CardTitle>
          <ShoppingBag className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold dark:text-white">42</div>
          <div className="flex items-center pt-1">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-green-500">+8.2%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">from yesterday</span>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:border-gray-800 dark:bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium dark:text-gray-200">Customers</CardTitle>
          <Users className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold dark:text-white">28</div>
          <div className="flex items-center pt-1">
            <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-xs text-red-500">-3.1%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">from yesterday</span>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:border-gray-800 dark:bg-gray-900">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium dark:text-gray-200">Average Order</CardTitle>
          <CreditCard className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold dark:text-white">₦5,845</div>
          <div className="flex items-center pt-1">
            <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-xs text-green-500">+4.3%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">from yesterday</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

