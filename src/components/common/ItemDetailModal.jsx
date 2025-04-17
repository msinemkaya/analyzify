import { BlockStack, Modal, Text } from '@shopify/polaris'

export const ItemDetailModal = ({ open, onClose, item }) => {
  if ( !item ) return null

  const formatKey = (key) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase())
  }

  return (
    <Modal
      open={ open }
      onClose={ onClose }
      title={ item.name }
      primaryAction={ { content: 'Close', onAction: onClose } }
    >
      <Modal.Section>
        <BlockStack inlineAlign="center">
          { item.image && (
            <img
              src={ item.image }
              alt={ item.name }
              style={ { width: '200px', height: '200px', borderRadius: '16px' } }
            />
          ) }
          { Object.entries(item).map(([ key, value ]) => {
            if ( key === 'image' || key === 'id' ) return null
            return (
              <Text as="p" variant="bodyMd" key={ key }>
                <strong>{ formatKey(key) }:</strong> { String(value) }
              </Text>
            )
          }) }
        </BlockStack>
      </Modal.Section>
    </Modal>
  )
}
