import '../App.css'
import { useState } from "react"
const Theme = () => {
    const [theme, setTheme] = useState(false)
    const wrap1 = {
        backgroundColor: 'white',
        width: 40,
        height: 20,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
    }

    const wrap = {
        backgroundColor: 'white',
        width: 40,
        height: 20,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
    }

    const ball = {
        height: 18,
        width: 18,
        backgroundColor: 'red',
        borderRadius: 50,
    }
    return (
        <div className='theme'>
            <div onClick={() => { setTheme(!theme) }} style={theme ? wrap : wrap1}>
                <div style={ball}></div>
            </div>
        </div>


    )
}

export default Theme