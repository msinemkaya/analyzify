import { Route, Routes } from 'react-router'
import { HomePage } from '../components/pages/HomePage.jsx'
import { ReportPage } from '../components/pages/ReportPage.jsx'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <HomePage/> }/>
    <Route path="/report" element={ <ReportPage/> }/>
  </Routes>
)

export default AppRoutes
