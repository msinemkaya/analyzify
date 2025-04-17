import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'
import { CustomizedTable } from '../components/sections/CustomizedTable.jsx'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'

jest.mock('../utils/getStatusBadge.jsx', () => ( {
  getStatusBadge: jest.fn(() => 'Mocked Status'),
} ))

const mockData = [
  { id: 1, name: 'Item 1', price: '$10', status: 'Active' },
  { id: 2, name: 'Item 2', price: '$20', status: 'Inactive' },
  { id: 3, name: 'Item 3', price: '$30', status: 'Active' },
]

const mockColumns = [
  { label: 'Name', key: 'name', sortable: true },
  { label: 'Price', key: 'price', sortable: true },
  { label: 'Status', key: 'status', sortable: false },
]

describe('CustomizedTable', () => {
  it('renders the table with correct data', () => {
    renderWithProvider(<CustomizedTable
        data={ mockData }
        columns={ mockColumns }
        badgeKey="status"
      />,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('$10')).toBeInTheDocument()
    const statusSpans = screen.getAllByText('Mocked Status')
    expect(statusSpans.length).toBeGreaterThan(0)
    expect(statusSpans[0]).toBeInTheDocument()
  })

  it('filters rows based on search input', () => {
    renderWithProvider(
      <CustomizedTable
        data={ mockData }
        columns={ mockColumns }
        badgeKey="status"
        searchKey="name"
      />,
    )

    const searchInput = screen.getByPlaceholderText('Search...')
    fireEvent.change(searchInput, { target: { value: 'Item 1' } })

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.queryByText('Item 2')).not.toBeInTheDocument()
  })

  it('sorts rows based on column headers', () => {
    renderWithProvider(
      <CustomizedTable
        data={ mockData }
        columns={ mockColumns }
        badgeKey="status"
      />,
    )

    const priceColumnHeader = screen.getByText('Price')
    fireEvent.click(priceColumnHeader)

    expect(screen.getByText('$10')).toBeInTheDocument()
    expect(screen.getByText('$20')).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
  })

  it('opens ItemDetailModal when a row is clicked', () => {
    renderWithProvider(
      <CustomizedTable
        data={ mockData }
        columns={ mockColumns }
        badgeKey="status"
      />,
    )

    const row = screen.getByText('Item 1')
    fireEvent.click(row)

    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })

  it('handles pagination correctly using nextURL button ID', () => {
    const { container } = renderWithProvider(
      <CustomizedTable
        data={ mockData }
        columns={ mockColumns }
        badgeKey="status"
        itemsPerPage={ 2 }
      />,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.queryByText('Item 3')).not.toBeInTheDocument()

    const nextButton = container.querySelector('#nextURL')
    expect(nextButton).toBeInTheDocument()

    fireEvent.click(nextButton)

    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })
})
