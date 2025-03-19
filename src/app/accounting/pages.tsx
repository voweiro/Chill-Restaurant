import { SidebarNav } from "../../components/sidebar-nav"
import { Header } from "../../components/header"
import { FinancialSummary } from "../../components/accounting/financial-summary"
import { RevenueChart } from "../../components/accounting/revenue-chart"
import { TransactionHistory } from "../../components/accounting/transaction-history"
import { ExpenseCategories } from "../../components/accounting/expense-categories"
import { PaymentMethods } from "../../components/accounting/payment-methods"
import { Footer } from "../../components/footer"

export default function AccountingPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <SidebarNav activeMenu="Accounting" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">Financial Dashboard</h1>
          <FinancialSummary />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="lg:col-span-2">
              <RevenueChart />
            </div>
            <div>
              <PaymentMethods />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
            <div className="lg:col-span-2">
              <TransactionHistory />
            </div>
            <div>
              <ExpenseCategories />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

