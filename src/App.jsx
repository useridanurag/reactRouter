import Footer from './comp/Footer/Footer'
import Header from './comp/Header/Header'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <>
      <Header />
      <Outlet />  {/* components come form main.jsx as a props*/}
      <Footer />
    </>
  )
}

export default App
