export const productColumns = [
  { key: 'name', label: 'Product', type: 'text', sortable: true },
  { key: 'price', label: 'Price', type: 'text', sortable: true },
  { key: 'quantity', label: 'Sold', type: 'numeric', sortable: true },
  { key: 'inventory', label: 'Inventory', type: 'numeric', sortable: true },
  { key: 'status', label: 'Status', type: 'text', sortable: true },
];

export const orderColumns = [
  { key: 'orderNumber', label: 'Order #', type: 'text', sortable: true },
  { key: 'customerName', label: 'Customer', type: 'text', sortable: true },
  { key: 'totalAmount', label: 'Total', type: 'text', sortable: true },
  { key: 'date', label: 'Date', type: 'text', sortable: true },
  { key: 'status', label: 'Payment Status', type: 'text', sortable: true },
];

export const customerColumns = [
  { key: 'name', label: 'Name', type: 'text', sortable: true },
  { key: 'email', label: 'Email', type: 'text', sortable: true },
  { key: 'totalOrders', label: 'Orders', type: 'numeric', sortable: true },
  { key: 'totalSpent', label: 'Spent', type: 'text', sortable: true },
  { key: 'status', label: 'Status', type: 'text', sortable: true },
];
