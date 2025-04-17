import { BlockStack, Box, Button, Card, ResourceItem, ResourceList, Text, Thumbnail } from '@shopify/polaris'
import { useState } from 'react'
import { getStatusBadge } from '../../utils/getStatusBadge.jsx'
import { ItemDetailModal } from '../common/ItemDetailModal.jsx'

export const OutOfStockItemList = ({ products }) => {
  const [ show, setShow ] = useState(false)
  const [ selectedProduct, setSelectedProduct ] = useState(null)
  const [ modalOpen, setModalOpen ] = useState(false)

  if ( products.length === 0 ) return null

  return (
    <Card>
      <BlockStack inlineAlign="center" gap="200">
        <Text as="h4" fontWeight="bold" variant="headingXl">
          Some products are out of stock
        </Text>
        <Text as="p" variant="bodyLg">
          You have { products.length } product(s) with 0 inventory.
        </Text>

        { show && (
          <Box minWidth="100%">
            <Box paddingBlock="300">
              <Text variant="headingMd" as="h3">Out of Inventory Products</Text>
            </Box>
            <ResourceList
              resourceName={ { singular: 'product', plural: 'products' } }
              items={ products }
              renderItem={ (item) => {
                const { id, name, price, status, image } = item
                return (
                  <ResourceItem
                    id={ id }
                    media={ <Thumbnail source={ image } alt={ name }/> }
                    accessibilityLabel={ `View details for ${ name }` }
                    onClick={ () => {
                      setSelectedProduct(item)
                      setModalOpen(true)
                    } }
                  >
                    <Box>
                      <Text variant="bodyMd" fontWeight="bold" as="h3">{ name }</Text>
                      <Text as="p" variant="bodySm" tone="subdued">
                        Price: { price } · { getStatusBadge(status) }
                      </Text>
                    </Box>
                  </ResourceItem>
                )
              } }
            />
          </Box>
        ) }

        <Button onClick={ () => setShow((prev) => !prev) }>
          { show ? 'Hide Items' : 'Show Items' }
        </Button>
      </BlockStack>

      <ItemDetailModal onClose={ () => setModalOpen(false) } open={ modalOpen } item={ selectedProduct }/>
    </Card>
  )
}
