import { Badge, Box, Card, InlineGrid, Text } from '@shopify/polaris'

export const StatCards = ({ stats }) => {
  return (
    <InlineGrid columns={ { xs: 1, sm: 2, md: 4 } } gap="400">
      { stats.map((stat) => (
        <Card key={ stat.title } padding="400">
          <Box>
            <Text as="h3" variant="bodyMd" tone="subdued">
              { stat.title }
            </Text>
            <Text as="p" variant="headingLg">
              { stat.value }
            </Text>
            <Badge tone={ stat.tone }>{ stat.badge }</Badge>
          </Box>
        </Card>
      )) }
    </InlineGrid>
  )
}
