import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts"

// Payment method data
const paymentData = [
  { name: "Cash", value: 25, color: "#10b981" },
  { name: "Card", value: 45, color: "#3b82f6" },
  { name: "Bank Transfer", value: 15, color: "#8b5cf6" },
  { name: "Mobile Payment", value: 15, color: "#f97316" },
]

export function PaymentMethods() {
  return (
    <Card className="dark:bg-gray-900 dark:border-gray-800">
      <CardHeader>
        <CardTitle className="text-lg dark:text-white">Payment Methods</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={paymentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {paymentData.map((entry, index) => (
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

        <div className="flex justify-center gap-4 mt-4">
          {paymentData.map((entry, index) => (
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

