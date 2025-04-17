import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'
import { ProgressBarCard } from '../components/common/ProgressBarCard.jsx'

describe('ProgressBarCard', () => {
  const mockProps = {
    title: 'Monthly Goal',
    current: 40,
    target: 100,
  }

  it('renders the title and progress text', () => {
    renderWithProvider(<ProgressBarCard { ...mockProps } />)

    expect(screen.getByText('Monthly Goal')).toBeInTheDocument()
    expect(screen.getByText('Progress: $40 / $100')).toBeInTheDocument()
  })

  it('renders a progress bar', () => {
    renderWithProvider(<ProgressBarCard { ...mockProps } />)

    const progressBars = screen.getAllByRole('progressbar')
    expect(progressBars.length).toBeGreaterThan(0)
  })
})
