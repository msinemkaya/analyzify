import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { ItemDetailModal } from '../components/common/ItemDetailModal.jsx'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'

beforeAll(() => {
  window.scroll = jest.fn()
})

const mockItem = {
  id: 1,
  name: 'Test Product',
  price: '$10.00',
  description: 'A sample item for testing',
  image: 'https://via.placeholder.com/150',
}

describe('ItemDetailModal', () => {
  const onCloseMock = jest.fn()

  beforeEach(() => {
    onCloseMock.mockClear()
  })

  it('does not render when closed or item is null', () => {
    const { rerender } = renderWithProvider(
      <ItemDetailModal open={ false } onClose={ onCloseMock } item={ mockItem }/>,
    )
    expect(screen.queryByText('Test Product')).not.toBeInTheDocument()

    rerender(
      <ItemDetailModal open={ true } onClose={ onCloseMock } item={ null }/>,
    )
    expect(screen.queryByText('Test Product')).not.toBeInTheDocument()
  })

  it('shows content when open and item exists', () => {
    renderWithProvider(
      <ItemDetailModal open={ true } onClose={ onCloseMock } item={ mockItem }/>,
    )
    expect(screen.getByText('A sample item for testing')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', () => {
    renderWithProvider(
      <ItemDetailModal open={ true } onClose={ onCloseMock } item={ mockItem }/>,
    )
    const closeButton = screen.getByRole('button', { name: /Close/i })
    fireEvent.click(closeButton)
    expect(onCloseMock).toHaveBeenCalled()
  })
})
