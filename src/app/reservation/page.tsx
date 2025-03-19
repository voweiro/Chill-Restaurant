import { SidebarNav } from "../../components/sidebar-nav"
import { Header } from "../../components/header"
import { ReservationCalendar } from "../../components/reservation/reservation-calendar"
import { ReservationList } from "../../components/reservation/reservation-list"
import { ReservationForm } from "../../components/reservation/reservation-form"
import { Footer } from "../../components/footer"

export default function ReservationPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <SidebarNav activeMenu="Reservation" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Reservations</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <ReservationCalendar />
              <ReservationList />
            </div>
            <div>
              <ReservationForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

