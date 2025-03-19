"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, Download, Upload, Clock, Database, Cloud, HardDrive } from "lucide-react"

export function BackupSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Backup & Restore</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Configure automatic backups and restore data when needed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Automatic Backups</h3>

          <div className="flex items-center justify-between">
            <div>
              <Label className="dark:text-gray-300">Enable automatic backups</Label>
              <p className="text-sm text-gray-500 dark:text-gray-400">Automatically backup your data</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label htmlFor="backup-frequency" className="dark:text-gray-300">
              Backup Frequency
            </Label>
            <Select defaultValue="daily">
              <SelectTrigger id="backup-frequency" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backup-time" className="dark:text-gray-300">
              Backup Time
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                id="backup-time"
                type="time"
                defaultValue="02:00"
                className="pl-9 dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Choose a time when the system is least busy</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backup-retention" className="dark:text-gray-300">
              Backup Retention
            </Label>
            <Select defaultValue="30">
              <SelectTrigger id="backup-retention" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select retention period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7">7 days</SelectItem>
                <SelectItem value="14">14 days</SelectItem>
                <SelectItem value="30">30 days</SelectItem>
                <SelectItem value="90">90 days</SelectItem>
                <SelectItem value="365">1 year</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500 dark:text-gray-400">How long to keep backups before deleting them</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="backup-location" className="dark:text-gray-300">
              Backup Location
            </Label>
            <Select defaultValue="cloud">
              <SelectTrigger id="backup-location" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select backup location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="local">Local Storage</SelectItem>
                <SelectItem value="cloud">Cloud Storage</SelectItem>
                <SelectItem value="both">Both Local and Cloud</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cloud-provider" className="dark:text-gray-300">
              Cloud Provider
            </Label>
            <Select defaultValue="aws">
              <SelectTrigger id="cloud-provider" className="dark:bg-gray-800 dark:border-gray-700">
                <SelectValue placeholder="Select cloud provider" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aws">Amazon S3</SelectItem>
                <SelectItem value="gcp">Google Cloud Storage</SelectItem>
                <SelectItem value="azure">Microsoft Azure</SelectItem>
                <SelectItem value="dropbox">Dropbox</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="cloud-credentials" className="dark:text-gray-300">
              Cloud Credentials
            </Label>
            <Input
              id="cloud-credentials"
              type="password"
              placeholder="Enter API key or credentials"
              className="dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-medium dark:text-white">Manual Backup & Restore</h3>

          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
            <h4 className="font-medium mb-2 dark:text-white">Create Manual Backup</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Create a backup of your current data</p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="backup-name" className="dark:text-gray-300">
                  Backup Name
                </Label>
                <Input
                  id="backup-name"
                  placeholder="Enter backup name"
                  defaultValue={`Backup_${new Date().toISOString().split("T")[0]}`}
                  className="dark:bg-gray-800 dark:border-gray-700"
                />
              </div>

              <div className="space-y-2">
                <Label className="dark:text-gray-300">What to Include</Label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Label className="dark:text-gray-300">Sales Data</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Label className="dark:text-gray-300">Menu Items</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Label className="dark:text-gray-300">Customer Data</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch defaultChecked />
                    <Label className="dark:text-gray-300">System Settings</Label>
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <Database className="h-4 w-4 mr-1" />
                Create Backup Now
              </Button>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
            <h4 className="font-medium mb-2 dark:text-white">Restore from Backup</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Restore your data from a previous backup</p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="restore-source" className="dark:text-gray-300">
                  Restore Source
                </Label>
                <Select defaultValue="cloud">
                  <SelectTrigger id="restore-source" className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectValue placeholder="Select restore source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cloud">Cloud Backup</SelectItem>
                    <SelectItem value="local">Local Backup</SelectItem>
                    <SelectItem value="file">Upload Backup File</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-file" className="dark:text-gray-300">
                  Select Backup
                </Label>
                <Select>
                  <SelectTrigger id="backup-file" className="dark:bg-gray-800 dark:border-gray-700">
                    <SelectValue placeholder="Select backup file" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="backup1">Backup_2025-01-15 (Today)</SelectItem>
                    <SelectItem value="backup2">Backup_2025-01-14 (Yesterday)</SelectItem>
                    <SelectItem value="backup3">Backup_2025-01-13</SelectItem>
                    <SelectItem value="backup4">Backup_2025-01-12</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 dark:border-gray-700 dark:text-gray-300">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button variant="destructive" className="flex-1">
                  <Upload className="h-4 w-4 mr-1" />
                  Restore
                </Button>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
            <h4 className="font-medium mb-2 dark:text-white">Recent Backups</h4>

            <div className="space-y-2">
              {[
                { date: "2025-01-15", time: "02:00", size: "24.5 MB", type: "Automatic", location: "Cloud" },
                { date: "2025-01-14", time: "02:00", size: "24.2 MB", type: "Automatic", location: "Cloud" },
                { date: "2025-01-13", time: "15:30", size: "24.1 MB", type: "Manual", location: "Local" },
              ].map((backup, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 text-sm border-b last:border-0 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2">
                    {backup.location === "Cloud" ? (
                      <Cloud className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    ) : (
                      <HardDrive className="h-4 w-4 text-green-500 dark:text-green-400" />
                    )}
                    <div>
                      <div className="font-medium dark:text-white">
                        {backup.date} {backup.time}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {backup.type} • {backup.size}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t dark:border-gray-700 flex justify-end">
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}

