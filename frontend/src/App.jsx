import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SigninBody from './pages/signin.jsx'
import SignupBody from './pages/signup.jsx'
import DashboardBody from './pages/dashboard.jsx'
import SendBody from './pages/sendMoney.jsx'
import Home from './pages/home.jsx'
import Success from './pages/success.jsx'
import Failed from './pages/failed.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignupBody />} />
        <Route path='/signin' element={<SigninBody />} />
        <Route path='/dashboard' element={<DashboardBody />} />
        <Route path='/send' element={<SendBody />} />
        <Route path='/success' element={<Success />} />
        <Route path='/failed' element={<Failed />} />
        <Route path='*' element={<div>404 Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
