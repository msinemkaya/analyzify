import { BlockStack, Card, Divider, Text } from '@shopify/polaris'
import { Heading } from '../common/Heading.jsx'

export const ReviewList = ({ reviews }) => {
  return (
    <Card>
      <Heading>
        Latest Reviews
      </Heading>
      <BlockStack gap="200">
        { reviews.map((review, index) => (
          <div key={ index }>
            <Text as="p">{ review.text }</Text>
            { index < reviews.length - 1 && <Divider/> }
          </div>
        )) }
      </BlockStack>
    </Card>
  )
}
