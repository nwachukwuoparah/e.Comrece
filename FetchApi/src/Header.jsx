import { useEffect, useState } from 'react'
import './App.css'
import imgpng from './img.png'
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";
const Header = () => {
    const [state, setState] = useState(false)
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
    )
}

export default Header