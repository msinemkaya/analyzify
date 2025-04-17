import { Badge } from '@shopify/polaris'

export const getStatusBadge = (status) => {
  const statusMap = {
    Active: { tone: 'success', children: 'Active' },
    Archived: { tone: 'critical', children: 'Archived' },
    Draft: { tone: 'attention', children: 'Draft' },

    Pending: { tone: 'attention', children: 'Pending' },
    Paid: { tone: 'success', children: 'Paid' },
    Failed: { tone: 'critical', children: 'Failed' },
    Refunded: { tone: 'warning', children: 'Refunded' },

    Banned: { tone: 'critical', children: 'Banned' },
    Inactive: { tone: 'warning', children: 'Inactive' },
  }
  return <Badge { ...statusMap[status] } />
}
