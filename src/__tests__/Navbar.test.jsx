import '@testing-library/jest-dom'
import { screen, fireEvent } from '@testing-library/react'
import { useNavigate, useLocation } from 'react-router'
import { renderWithProvider } from '../utils/renderWithProvider.jsx'
import { Navbar } from '../components/sections/Navbar.jsx'

jest.mock('react-router', () => ( {
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
} ))

describe('Navbar', () => {
  const mockNavigate = jest.fn()

  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate)
    useLocation.mockReturnValue({ pathname: '/' })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders Home and Report buttons', () => {
    renderWithProvider(<Navbar/>)

    expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Report/i })).toBeInTheDocument()
  })

  it('navigates to correct path when a button is clicked', () => {
    renderWithProvider(<Navbar/>)

    const reportButton = screen.getByRole('button', { name: /Report/i })
    fireEvent.click(reportButton)

    expect(mockNavigate).toHaveBeenCalledWith('/report')
  })

  it('applies primary style to the active path', () => {
    useLocation.mockReturnValue({ pathname: '/report' })
    renderWithProvider(<Navbar/>)

    const reportButton = screen.getByRole('button', { name: /Report/i })
    const homeButton = screen.getByRole('button', { name: /Home/i })

    expect(reportButton.className).toMatch(/primary/i)
    expect(homeButton.className).toMatch(/tertiary/i)
  })
})
