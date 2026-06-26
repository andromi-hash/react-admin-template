import type { User, Product, AnalyticsData } from "../types";

export const analyticsData: AnalyticsData[] = [
  { month: "Jan", revenue: 12400, users: 1200, orders: 340 },
  { month: "Feb", revenue: 14800, users: 1350, orders: 380 },
  { month: "Mar", revenue: 16200, users: 1500, orders: 420 },
  { month: "Apr", revenue: 15800, users: 1420, orders: 400 },
  { month: "May", revenue: 18400, users: 1680, orders: 460 },
  { month: "Jun", revenue: 21200, users: 1900, orders: 520 },
  { month: "Jul", revenue: 19800, users: 1850, orders: 490 },
  { month: "Aug", revenue: 22600, users: 2100, orders: 550 },
];

export const users: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "active", joined: "2024-01-15" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "active", joined: "2024-02-20" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "inactive", joined: "2024-03-10" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "Editor", status: "active", joined: "2024-03-22" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", role: "Admin", status: "active", joined: "2024-04-05" },
  { id: 6, name: "Frank Brown", email: "frank@example.com", role: "Viewer", status: "inactive", joined: "2024-04-18" },
  { id: 7, name: "Grace Kim", email: "grace@example.com", role: "Editor", status: "active", joined: "2024-05-01" },
  { id: 8, name: "Henry Davis", email: "henry@example.com", role: "Viewer", status: "active", joined: "2024-05-14" },
];

export const products: Product[] = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 79.99, stock: 45, sales: 320 },
  { id: 2, name: "Running Shoes", category: "Sports", price: 129.99, stock: 30, sales: 210 },
  { id: 3, name: "Coffee Maker", category: "Home", price: 49.99, stock: 60, sales: 150 },
  { id: 4, name: "Backpack", category: "Accessories", price: 59.99, stock: 25, sales: 180 },
  { id: 5, name: "Desk Lamp", category: "Home", price: 34.99, stock: 80, sales: 95 },
  { id: 6, name: "Yoga Mat", category: "Sports", price: 24.99, stock: 100, sales: 280 },
  { id: 7, name: "Phone Case", category: "Accessories", price: 19.99, stock: 200, sales: 450 },
  { id: 8, name: "Bluetooth Speaker", category: "Electronics", price: 39.99, stock: 55, sales: 190 },
];
