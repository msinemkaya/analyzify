import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { OutOfStockItemList } from '../components/sections/OutOfStockItemList'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'

jest.mock('../components/common/ItemDetailModal', () => ( {
  ItemDetailModal: ({ onClose, open, item }) => (
    open ? <div data-testid="modal">{ item.name }</div> : null
  ),
} ))

describe('OutOfStockItemList', () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$10', status: 'out-of-stock', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: '$20', status: 'out-of-stock', image: 'image2.jpg' },
  ]

  it('renders the component with products', () => {
    renderWithProvider(<OutOfStockItemList products={ products }/>)

    expect(screen.getByText(/Some products are out of stock/i)).toBeInTheDocument()
    expect(screen.getByText(/You have 2 product\(s\) with 0 inventory/i)).toBeInTheDocument()
  })

  it('toggles the product list visibility when the button is clicked', () => {
    renderWithProvider(<OutOfStockItemList products={ products }/>)

    const button = screen.getByRole('button', { name: /Show Items/i })
    fireEvent.click(button)

    expect(screen.getByText(/Out of Inventory Products/i)).toBeInTheDocument()
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument()

    fireEvent.click(button)

    expect(screen.queryByText(/Out of Inventory Products/i)).not.toBeInTheDocument()
  })

  it('opens the modal when a product item is clicked', () => {
    renderWithProvider(<OutOfStockItemList products={ products }/>)

    fireEvent.click(screen.getByText(/Show Items/i))

    const productItem = screen.getByText(/Product 1/i)
    fireEvent.click(productItem)

    expect(screen.getByTestId('modal')).toHaveTextContent('Product 1')
  })

  it('renders the modal with the selected product', () => {
    renderWithProvider(<OutOfStockItemList products={ products }/>)

    fireEvent.click(screen.getByText(/Show Items/i))

    const productItem = screen.getByText(/Product 1/i)
    fireEvent.click(productItem)

    const modal = screen.getByTestId('modal')
    expect(modal).toHaveTextContent('Product 1')
    expect(modal).toBeInTheDocument()
  })
})
