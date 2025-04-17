import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ReportCards } from '../components/sections/ReportCards'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'

describe('ReportCards', () => {
  const mockData = {
    totalProducts: 120,
    totalSold: 80,
    totalInventory: 40,
  }

  it('renders all metric cards with correct data', () => {
    renderWithProvider(
      <ReportCards
        totalProducts={ mockData.totalProducts }
        totalSold={ mockData.totalSold }
        totalInventory={ mockData.totalInventory }
      />,
    )

    expect(screen.getByText(/Total Products/i)).toBeInTheDocument()
    expect(screen.getByText(/120/i)).toBeInTheDocument()

    expect(screen.getByText(/Total Sold/i)).toBeInTheDocument()
    expect(screen.getByText(/80/i)).toBeInTheDocument()

    expect(screen.getByText(/Total Inventory/i)).toBeInTheDocument()
    expect(screen.getByText(/40/i)).toBeInTheDocument()
  })

  it('renders the correct number of cards', () => {
    renderWithProvider(
      <ReportCards
        totalProducts={ mockData.totalProducts }
        totalSold={ mockData.totalSold }
        totalInventory={ mockData.totalInventory }
      />,
    )

    const cards = screen.getAllByRole('heading', { level: 2 })
    expect(cards.length).toBe(3) // There should be 3 cards
  })
})
