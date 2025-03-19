import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, Clock, Truck, ClockIcon as UserClock } from "lucide-react"

export function DeliveryStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
            <Truck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Deliveries</p>
            <h3 className="text-2xl font-bold dark:text-white">7</h3>
            <p className="text-xs text-green-500 dark:text-green-400">+2 from yesterday</p>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
            <ClipboardCheck className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Completed Today</p>
            <h3 className="text-2xl font-bold dark:text-white">12</h3>
            <p className="text-xs text-green-500 dark:text-green-400">94% on-time rate</p>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mr-4">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Average Time</p>
            <h3 className="text-2xl font-bold dark:text-white">28 min</h3>
            <p className="text-xs text-red-500 dark:text-red-400">+3 min from last week</p>
          </div>
        </CardContent>
      </Card>

      <Card className="dark:bg-gray-900 dark:border-gray-800">
        <CardContent className="p-4 flex items-center">
          <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
            <UserClock className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Riders</p>
            <h3 className="text-2xl font-bold dark:text-white">5 / 8</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">3 offline</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

