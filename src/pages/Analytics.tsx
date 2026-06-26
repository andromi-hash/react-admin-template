import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { analyticsData } from "../lib/data";

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Detailed performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Revenue Over Time
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={analyticsData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#6366f1"
                fill="url(#colorRevenue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Users & Orders
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={analyticsData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#6366f1" radius={[4, 4, 0, 0]} />
              <Bar dataKey="orders" fill="#22c55e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Monthly Breakdown
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left p-3 text-gray-500 dark:text-gray-400 font-medium">Month</th>
                <th className="text-right p-3 text-gray-500 dark:text-gray-400 font-medium">Revenue</th>
                <th className="text-right p-3 text-gray-500 dark:text-gray-400 font-medium">Users</th>
                <th className="text-right p-3 text-gray-500 dark:text-gray-400 font-medium">Orders</th>
                <th className="text-right p-3 text-gray-500 dark:text-gray-400 font-medium">AOV</th>
              </tr>
            </thead>
            <tbody>
              {analyticsData.map((d) => (
                <tr key={d.month} className="border-b border-gray-100 dark:border-gray-700/50">
                  <td className="p-3 text-gray-900 dark:text-white font-medium">{d.month}</td>
                  <td className="p-3 text-right text-gray-900 dark:text-white">
                    ${d.revenue.toLocaleString()}
                  </td>
                  <td className="p-3 text-right text-gray-500 dark:text-gray-400">
                    {d.users.toLocaleString()}
                  </td>
                  <td className="p-3 text-right text-gray-500 dark:text-gray-400">
                    {d.orders}
                  </td>
                  <td className="p-3 text-right text-gray-500 dark:text-gray-400">
                    ${(d.revenue / d.orders).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
