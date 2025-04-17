import { Box, Card, Layout, Page, Select, Text } from '@shopify/polaris'
import { useState } from 'react'
import productDummyData from '../../data/productDummyData.js'
import { ReportCards } from '../sections/ReportCards.jsx'
import { CustomizedTable } from '../sections/CustomizedTable.jsx'
import { OutOfStockItemList } from '../sections/OutOfStockItemList.jsx'
import ordersDummyData from '../../data/ordersDummyData.js'
import customerDummyData from '../../data/customerDummyData.js'
import { customerColumns, orderColumns, productColumns } from '../../utils/columns.js'

export const ReportPage = () => {
  const [ selectedStatus, setSelectedStatus ] = useState('All')

  const statusOptions = [
    { label: 'All', value: 'All' },
    { label: 'Active', value: 'Active' },
    { label: 'Archived', value: 'Archived' },
    { label: 'Draft', value: 'Draft' },
  ]

  const totalSold = productDummyData.reduce((sum, p) => sum + p.quantity, 0)
  const totalInventory = productDummyData.reduce((sum, p) => sum + p.inventory, 0)
  const outOfStock = productDummyData.filter((p) => p.inventory === 0)

  const handleSelectChange = (value) => setSelectedStatus(value)

  return (
    <Page title="Product Report">
      <Layout>
        <Layout.Section>
          <ReportCards totalInventory={ totalInventory } totalSold={ totalSold }
                       totalProducts={ productDummyData.length }/>
        </Layout.Section>

        <Layout.Section>
          <Card padding="300">
            <Select
              label="Filter by status"
              options={ statusOptions }
              onChange={ handleSelectChange }
              value={ selectedStatus }
            />
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <Box paddingBlock="300">
              <Text variant="headingMd" as="h3">Inventory & Sales</Text>
            </Box>
            <CustomizedTable
              data={ productDummyData }
              columns={ productColumns }
              badgeKey="status"
              selectedStatus={ selectedStatus }
              searchKey="name"
              rowClickable={ true }
            />
          </Card>
        </Layout.Section>

        { outOfStock.length > 0 && (
          <Layout.Section>
            <OutOfStockItemList products={ outOfStock }/>
          </Layout.Section>
        ) }

        <Layout.Section>
          <Card>
            <Box paddingBlock="300">
              <Text variant="headingMd" as="h3">Latest Orders</Text>
            </Box>
            <CustomizedTable
              data={ ordersDummyData }
              columns={ orderColumns }
              badgeKey="status"
              searchKey="orderNumber"
              rowClickable={ true }
            />
          </Card>
        </Layout.Section>

        <Layout.Section>
          <Card>
            <Box paddingBlock="300">
              <Text variant="headingMd" as="h3">Latest Customers</Text>
            </Box>
            <CustomizedTable
              data={ customerDummyData }
              columns={ customerColumns }
              badgeKey="status"
              searchKey="name"
              rowClickable={ true }
            />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  )
}
