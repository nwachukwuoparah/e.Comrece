import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Comp from './Comp'
import Detail from './Detail'
import Header from './Header'
function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Comp />} />
          <Route path='/detail/:id' element={<Detail/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
