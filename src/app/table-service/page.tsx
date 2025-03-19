import { SidebarNav } from "../../components/sidebar-nav"
import { Header } from "../../components/header"
import { TableLayout } from "../../components/table-service/table-layout"
import { TableDetails } from "../../components/table-service/table-details"
import { TableActions } from "../../components/table-service/table-actions"
import { Footer } from "../../components/footer"

export default function TableServicePage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <SidebarNav activeMenu="Table Services" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-auto p-4">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold dark:text-white">Table Management</h1>
              <TableActions />
            </div>
            <div className="flex gap-4 h-[calc(100vh-200px)]">
              <TableLayout />
              <TableDetails />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}

