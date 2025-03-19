import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

const expenseData = [
  { name: "Ingredients", value: 45, color: "#10b981" },
  { name: "Staff", value: 25, color: "#3b82f6" },
  { name: "Rent", value: 15, color: "#8b5cf6" },
  { name: "Utilities", value: 8, color: "#f97316" },
  { name: "Marketing", value: 7, color: "#ec4899" },
]

export function ExpenseCategories() {
  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg dark:text-white">Expense Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenseData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {expenseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`]}
                contentStyle={{ backgroundColor: "#1f2937", borderColor: "#374151", color: "#e5e7eb" }}
                labelStyle={{ color: "#e5e7eb" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
          {expenseData.map((entry, index) => (
            <div key={index} className="flex items-center">
              <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: entry.color }}></div>
              <span className="text-sm dark:text-gray-300">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

