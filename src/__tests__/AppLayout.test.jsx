import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { AppLayout } from '../components/layout/AppLayout.jsx'

jest.mock('../components/sections/Navbar.jsx', () => ( {
  Navbar: () => <nav>Mocked Navbar</nav>,
} ))

describe('AppLayout', () => {
  it('renders the Navbar and children', () => {
    render(
      <AppLayout>
        <div>Test Content</div>
      </AppLayout>,
    )

    expect(screen.getByText('Mocked Navbar')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
