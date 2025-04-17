import { Box, Card, Text } from '@shopify/polaris'

export const WelcomeCard = () => {
  return (
    <Card sectioned>
      <Box alignment="center" spacing="loose">
        <Box padding={ { xs: '200', sm: '400' } }>
          <Text variant="heading2xl" as="h1" alignment="center">
            📊 Welcome to the Report Dashboard
          </Text>
        </Box>
        <Text as="p" variant="bodyMd" alignment="center" tone="subdued">
          Easily track your product performance, sales metrics and customer insights in one place.
        </Text>
      </Box>
    </Card>
  )
}
