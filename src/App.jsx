import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
  )
}

export default App
