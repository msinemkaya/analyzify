import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { OverAllStatCard } from '../components/sections/OverAllStatCard'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'

describe('OverAllStatCard', () => {
  const stats = {
    totalCustomers: 150,
    totalOrders: 200,
    productsInStock: 50,
  }

  it('renders the component and displays the correct statistics', () => {
    renderWithProvider(<OverAllStatCard stats={ stats }/>)

    expect(screen.getByText(/Overall Statistics/i)).toBeInTheDocument()
    expect(screen.getByText(/👥 Total Customers: 150/i)).toBeInTheDocument()
    expect(screen.getByText(/🛒 Total Orders: 200/i)).toBeInTheDocument()
    expect(screen.getByText(/📦 Products in Stock: 50/i)).toBeInTheDocument()
  })
})
