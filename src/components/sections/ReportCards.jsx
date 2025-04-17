import { Box, Card, Grid, Text } from '@shopify/polaris'

export const ReportCards = ({ totalProducts, totalSold, totalInventory }) => {
  const metricCards = [
    { label: 'Total Products', value: totalProducts },
    { label: 'Total Sold', value: totalSold },
    { label: 'Total Inventory', value: totalInventory },
  ]

  return (
    <Grid>
      { metricCards.map(({ label, value }) => (
        <Grid.Cell columnSpan={ { xs: 6, md: 2, lg: 4 } } key={ label }>
          <Card rounded>
            <Box padding="300">
              <Text variant="bodyMd" as="p" tone="subdued">{ label }</Text>
              <Text variant="headingLg" as="h2">{ value }</Text>
            </Box>
          </Card>
        </Grid.Cell>
      )) }
    </Grid>
  )
}
