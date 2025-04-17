import { BlockStack, Card, Text } from '@shopify/polaris'
import { Heading } from '../common/Heading.jsx'

export const OverAllStatCard = ({ stats }) => {
  return (
    <Card>
      <Heading>
        Overall Statistics
      </Heading>
      <BlockStack gap="200">
        <Text as="p" variant="headingMd">👥 Total Customers: { stats.totalCustomers }</Text>
        <Text as="p" variant="headingMd">🛒 Total Orders: { stats.totalOrders }</Text>
        <Text as="p" variant="headingMd">📦 Products in Stock: { stats.productsInStock }</Text>
      </BlockStack>
    </Card>
  )
}
