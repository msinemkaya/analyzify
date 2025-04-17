import { Box, Card, ProgressBar, Text } from '@shopify/polaris'
import { Heading } from './Heading.jsx'

export const ProgressBarCard = ({ title, current, target }) => {
  const progress = ( current / target ) * 100

  return (
    <Card>
      <Heading>
        { title }
      </Heading>
      <Text as="span" tone="subdued">
        Progress: ${ current } / ${ target }
      </Text>
      <Box paddingBlockStart="200">
        <ProgressBar progress={ progress } tone="success"/>
      </Box>
    </Card>
  )
}
