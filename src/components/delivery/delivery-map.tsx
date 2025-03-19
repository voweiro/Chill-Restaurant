import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Navigation, Layers } from "lucide-react"

export function DeliveryMap() {
  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg dark:text-white">Delivery Map</CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="dark:border-gray-700">
              <Layers className="h-4 w-4 mr-1" />
              Layers
            </Button>
            <Button variant="outline" size="sm" className="dark:border-gray-700">
              <Navigation className="h-4 w-4 mr-1" />
              Current Location
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All Deliveries</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="m-0">
            <div className="relative w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden border dark:border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2 opacity-20" />
                  <p>Map visualization goes here</p>
                  <p className="text-sm mt-2">
                    (In a real application, this would display an interactive map
                    <br />
                    showing delivery locations and rider positions)
                  </p>
                </div>
              </div>

              {/* Delivery pins */}
              <div className="absolute top-1/4 left-1/3 bg-red-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                1
              </div>

              <div className="absolute top-1/3 left-2/3 bg-green-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                2
              </div>

              <div className="absolute top-2/3 left-1/2 bg-blue-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                3
              </div>

              <div className="absolute top-1/2 left-1/4 bg-orange-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                4
              </div>

              {/* Rider icons */}
              <div className="absolute top-2/5 left-2/5 bg-yellow-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                R1
              </div>

              <div className="absolute top-3/5 left-3/5 bg-yellow-500 text-white p-1 rounded-full h-6 w-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                R2
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-gray-700 dark:text-gray-300">Pending</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-orange-500 rounded-full mr-1"></div>
                  <span className="text-gray-700 dark:text-gray-300">In Progress</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-gray-700 dark:text-gray-300">Completed</span>
                </div>
              </div>

              <div className="text-gray-500 dark:text-gray-400">Last updated: 2 minutes ago</div>
            </div>
          </TabsContent>

          <TabsContent value="active" className="m-0">
            <div className="h-[400px] flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Active deliveries map view</p>
            </div>
          </TabsContent>

          <TabsContent value="completed" className="m-0">
            <div className="h-[400px] flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Completed deliveries map view</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

