import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Link } from "react-router-dom"
function Comp() {

    const [count, setCount] = useState([])

    const Fetch = async () => {
        const res = await axios.get(`https://fakestoreapi.com/products`)
        setCount(res.data)
    }

    useEffect(() => {
        Fetch()
    }, [])

    return (
        <div className='root'>
            <div className="App">
                {count.map((item) => (
                    <Link key={item.id} className='card'to={`/detail/${item.id}`}>
                        <img src={item.image} />
                        <p>{item.category}</p>
                        <div className='rate'>
                            <p>Price:{item.price}</p>
                            <p>rate:{item.rating.rate}</p>
                        </div>
                    </Link>))}
            </div>


        </div >
    )
}

export default Comp