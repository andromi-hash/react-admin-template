export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  joined: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
}

export interface AnalyticsData {
  month: string;
  revenue: number;
  users: number;
  orders: number;
}
