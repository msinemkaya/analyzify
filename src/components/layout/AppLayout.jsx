import { Navbar } from '../sections/Navbar.jsx'

export const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar/>
      { children }
    </>
  )
}
