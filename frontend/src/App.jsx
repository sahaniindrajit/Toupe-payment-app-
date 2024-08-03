import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SigninBody from './pages/signin.jsx'
import SignupBody from './pages/signup.jsx'
import DashboardBody from './pages/dashboard.jsx'
import SendBody from './pages/sendMoney.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignupBody />} />
        <Route path='/signin' element={<SigninBody />} />
        <Route path='/dashboard' element={<DashboardBody />} />
        <Route path='/send' element={<SendBody />} />
        <Route path='*' element={<div>404 Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
