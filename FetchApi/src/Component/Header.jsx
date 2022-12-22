import { useEffect, useState } from 'react'
import '../App.css'
import imgpng from './img.png'
import { MdMenu } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { Link, Navigate } from "react-router-dom"
import { BsCart3 } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import Theme from './Theme'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()
    const [state, setState] = useState(false)
    const [teem, setTeem] = useState(false)

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
                <img className='img' src={imgpng} onClick={() => { navigate('/') }} />
                <nav className='nav'>
                    <Link className='link' to={'/'}>
                        <p>HOME</p>
                    </Link>
                    <Link className='link'>
                        <p>CATEGORY</p>
                    </Link >

                    <Link className='link' to={'/Cart'}>
                        <div style={{ display: 'flex', gap: 10, }}><p>CART</p><BsCart3 /></div>
                    </Link>
                </nav>
                {state ? <MdClear className='burger' style={{ fontSize: 35, fontWeight: 3000 }} onClick={() => { setState(!state) }} /> : <MdMenu style={{ fontSize: 35, fontWeight: 3000 }} onClick={() => { setState(!state) }} className='burger' />}
                {state ? Menu : ''}
                {/* {teem ? <MdNightlight style={{ fontSize: 30, color: '#f8f8f8' }} onClick={() => { setTeem(!teem) }} /> : <MdLightMode style={{ fontSize: 30 }} onClick={() => { setTeem(!teem) }} />} */}
                <Theme />
            </div>
        </div>
    )
}

export default Header