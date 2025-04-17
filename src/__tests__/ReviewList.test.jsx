import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { renderWithProvider } from '../utils/renderWithProvider'
import { ReviewList } from '../components/sections/ReviewList'

describe('ReviewList', () => {
  const mockReviews = [
    { text: 'Great product!' },
    { text: 'Fast delivery and good quality.' },
    { text: 'Will buy again.' },
  ]

  it('renders all reviews', () => {
    renderWithProvider(<ReviewList reviews={ mockReviews }/>)

    mockReviews.forEach((review) => {
      expect(screen.getByText(review.text)).toBeInTheDocument()
    })
  })

  it('renders dividers between reviews except after the last one', () => {
    const { container } = renderWithProvider(<ReviewList reviews={ mockReviews }/>)
    const dividers = container.querySelectorAll('hr')
    expect(dividers.length).toBe(mockReviews.length - 1)
  })

  it('renders section heading', () => {
    renderWithProvider(<ReviewList reviews={ mockReviews }/>)
    expect(screen.getByText(/Latest Reviews/i)).toBeInTheDocument()
  })
})
