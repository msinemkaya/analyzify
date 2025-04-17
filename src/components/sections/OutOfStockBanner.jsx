import { Banner, Card } from '@shopify/polaris'

export const OutOfStockBanner = ({ itemCount }) => {
  return (
    <Card>
      <Banner title="Attention Required" tone="critical">
        { itemCount } products are out of stock. Please restock to avoid losing sales.
      </Banner>
    </Card>
  )
}
