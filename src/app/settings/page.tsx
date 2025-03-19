import { SidebarNav } from "../../components/sidebar-nav"
import { Header } from "../../components/header"
import { SettingsTabs } from "../../components/settings/settings-tabs"
import { Footer } from "../../components/footer"

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <SidebarNav activeMenu="Settings" />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-auto p-4">
          <h1 className="text-2xl font-bold mb-4 dark:text-white">System Settings</h1>
          <SettingsTabs />
        </div>
        <Footer />
      </div>
    </div>
  )
}

