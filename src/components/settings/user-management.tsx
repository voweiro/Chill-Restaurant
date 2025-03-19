"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  SearchIcon,
  PlusCircle,
  MoreHorizontal,
  Mail,
  User,
  Phone,
  Key,
  ShieldAlert,
  UserPlus,
  Eye,
  EyeOff,
} from "lucide-react"

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+234 123 456 7890",
    role: "manager",
    status: "active",
    lastLogin: "Today, 10:30 AM",
  },
  {
    id: 2,
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    phone: "+234 234 567 8901",
    role: "admin",
    status: "active",
    lastLogin: "Yesterday, 4:15 PM",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    phone: "+234 345 678 9012",
    role: "staff",
    status: "active",
    lastLogin: "Jan 14, 2025, 9:20 AM",
  },
  {
    id: 4,
    name: "Emily Wilson",
    email: "emily.wilson@example.com",
    phone: "+234 456 789 0123",
    role: "cashier",
    status: "active",
    lastLogin: "Jan 13, 2025, 5:45 PM",
  },
  {
    id: 5,
    name: "Robert Brown",
    email: "robert.brown@example.com",
    phone: "+234 567 890 1234",
    role: "kitchen",
    status: "inactive",
    lastLogin: "Dec 28, 2024, 11:10 AM",
  },
]

export function UserManagement() {
  const [showAddUser, setShowAddUser] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-1 dark:text-white">User Management</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage user accounts and permissions for accessing the POS system.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search users..." className="pl-9 w-[220px] dark:bg-gray-800 dark:border-gray-700" />
          </div>

          <Dialog open={showAddUser} onOpenChange={setShowAddUser}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="h-4 w-4 mr-1" />
                Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="dark:bg-gray-900 dark:border-gray-800">
              <DialogHeader>
                <DialogTitle className="dark:text-white">Add New User</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="user-name" className="dark:text-gray-300">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="user-name"
                      placeholder="Enter name"
                      className="pl-9 dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-email" className="dark:text-gray-300">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="user-email"
                      placeholder="Enter email"
                      className="pl-9 dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-phone" className="dark:text-gray-300">
                    Phone Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="user-phone"
                      placeholder="Enter phone number"
                      className="pl-9 dark:bg-gray-800 dark:border-gray-700"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-password" className="dark:text-gray-300">
                    Initial Password
                  </Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="user-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                      className="pl-9 dark:bg-gray-800 dark:border-gray-700"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="user-role" className="dark:text-gray-300">
                    Role
                  </Label>
                  <Select defaultValue="staff">
                    <SelectTrigger id="user-role" className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Administrator</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                      <SelectItem value="cashier">Cashier</SelectItem>
                      <SelectItem value="kitchen">Kitchen Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowAddUser(false)}
                  className="dark:border-gray-700 dark:text-gray-300"
                >
                  Cancel
                </Button>
                <Button onClick={() => setShowAddUser(false)}>
                  <UserPlus className="h-4 w-4 mr-1" />
                  Add User
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-4 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700 flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  user.role === "admin"
                    ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
                    : user.role === "manager"
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                }`}
              >
                {user.role === "admin" ? <ShieldAlert className="h-5 w-5" /> : <User className="h-5 w-5" />}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium dark:text-white">{user.name}</h3>
                  <Badge
                    variant="outline"
                    className={
                      user.status === "active"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600"
                    }
                  >
                    {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <Mail className="h-3 w-3 mr-1" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>{user.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right mr-2">
                <div className="text-sm font-medium dark:text-white capitalize">{user.role}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Last login: {user.lastLogin}</div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit User</DropdownMenuItem>
                  <DropdownMenuItem>Change Role</DropdownMenuItem>
                  <DropdownMenuItem>Reset Password</DropdownMenuItem>
                  {user.status === "active" ? (
                    <DropdownMenuItem className="text-red-500 dark:text-red-400">Deactivate User</DropdownMenuItem>
                  ) : (
                    <DropdownMenuItem className="text-green-500 dark:text-green-400">Activate User</DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

