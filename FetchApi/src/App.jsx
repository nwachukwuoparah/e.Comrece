import './App.css'
import Header from './Component/Header'
import Cart from './Cart/Cart'
import Comp from './Body/Comp'
import Detail from './Detail/Detail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Comp />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
