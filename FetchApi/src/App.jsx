import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import imgpng from './img.png'
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";
function App() {
  const [count, setCount] = useState([])
  const [state, setState] = useState(false)
  const Fetch = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`)
    setCount(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    Fetch()
    console.log(count)
  }, [])
  const Menu = (
    <nav className='nav_menu'>
      <div className='return' onClick={() => { setState(!state) }}  ></div>
      <div className='nav_menu_wrap'>
        <p>HOME</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </div>
    </nav>)
  return (
    <div className='root'>
      <div className='head'>
        <div className='nav_wrap'>
          <img className='img' src={imgpng} />
          <nav className='nav'>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>CONTACT</p>
          </nav>
          {state ? <MdClear className='burger' style={{ fontSize: 35, fontWeight: 3000 }} onClick={() => { setState(!state) }} /> : <MdMenu style={{ fontSize: 35, fontWeight: 3000 }} onClick={() => { setState(!state) }} className='burger' />}
          {state ? Menu : ''}
        </div>
      </div>
      <div className="App">
        {count.map((item) => (
          <div key={item.id} className='card' >
            <img src={item.image} />
            {/* <p>{item.description}</p> */}
            <p>{item.category}</p>
            <div className='rate'>
              <p>Price:{item.price}</p>
              <p>rate:{item.rating.rate}</p>
            </div>
          </div>))}
      </div>


    </div >
  )
}

export default App
