import { Search, Share2, Bell, User, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 flex items-center gap-4 border-b dark:border-gray-800 sticky top-0 z-10">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search Product here..."
          className="pl-10 w-full dark:bg-gray-800 dark:border-gray-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 dark:border-gray-700 dark:bg-gray-800">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold">Table 4</span>
              <span className="text-gray-500 text-sm">Floyd Miles</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Table 1 - Available</DropdownMenuItem>
            <DropdownMenuItem>Table 2 - Jane Cooper</DropdownMenuItem>
            <DropdownMenuItem>Table 3 - Available</DropdownMenuItem>
            <DropdownMenuItem className="bg-green-50 dark:bg-green-900/30">Table 4 - Floyd Miles</DropdownMenuItem>
            <DropdownMenuItem>Table 5 - Esther Howard</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="relative">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0"
            >
              3
            </Badge>
          </Button>
        </div>

        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>

        <Button variant="ghost" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

