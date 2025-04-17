import { Text } from '@shopify/polaris'

export const Heading = ({ children }) => {
  return (
    <Text as="h2" variant="headingLg" alignment="center" tone="subdued">
      { children }
    </Text>
  )
}
