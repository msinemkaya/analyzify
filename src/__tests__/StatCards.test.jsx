import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { StatCards } from '../components/sections/StatCards'
import { renderWithProvider } from '../utils/renderWithProvider'

describe('StatCards', () => {
  const mockStats = [
    { title: 'Revenue', value: '$10,000', badge: 'Up 20%', tone: 'success' },
    { title: 'Refunds', value: '$500', badge: 'Down 5%', tone: 'critical' },
    { title: 'Visitors', value: '15,000', badge: 'Up 10%', tone: 'success' },
    { title: 'Orders', value: '300', badge: 'Stable', tone: 'warning' },
  ]

  it('renders a card for each stat', () => {
    renderWithProvider(<StatCards stats={ mockStats }/>)

    mockStats.forEach((stat) => {
      expect(screen.getByText(stat.title)).toBeInTheDocument()
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.badge)).toBeInTheDocument()
    })
  })
})
