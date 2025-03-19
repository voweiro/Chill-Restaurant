import { SidebarNav } from "../../components/sidebar-nav"
import { Header } from "../../components/header"
import { DeliveryMap } from "../../components/delivery/delivery-map"
import { DeliveryOrders } from "../../components/delivery/delivery-orders"
import { DeliveryStats } from "../../components/delivery/delivery-stats"
import { DeliveryRiders } from "../../components/delivery/delivery-riders"
import { Footer } from "../../components/footer"

export default function DeliveryPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <SidebarNav activeMenu="Delivery" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Delivery Management</h1>
          <DeliveryStats />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="lg:col-span-2">
              <DeliveryMap />
            </div>
            <div>
              <DeliveryRiders />
            </div>
          </div>
          <div className="mt-4">
            <DeliveryOrders />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

