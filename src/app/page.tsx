import { SidebarNav } from "../components/sidebar-nav"
import { Header } from "../components/header"
import { CategoryFilter } from "../components/category-filter"
import { FoodGrid } from "../components/food-grid"
import { Cart } from "../components/cart"
import { Footer } from "../components/footer"
import { DashboardSummary } from "../components/dashboard-summary"
import { DiningMode } from "../components/dining-mode"

export default function POSPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <SidebarNav activeMenu="Menu" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-auto p-4">
            <DashboardSummary />
            <DiningMode />
            <CategoryFilter />
            <FoodGrid />
          </main>
          <Cart />
        </div>
        <Footer />
      </div>
    </div>
  )
}

