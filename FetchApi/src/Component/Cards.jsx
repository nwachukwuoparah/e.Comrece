import '../Body/Comp.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import image from './img.png'
import { Link } from "react-router-dom"
const Card = () => {
    const [product, SetProduct] = useState([])
    async function get() {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            console.log(res.data)
            SetProduct(res.data)

        } catch (err) {
            if (error.response) {
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request) {
                console.log(error.response.request)
            } else {
                console.log('Error', error.message)
            }
            console.log(err.config)
        }
    }

    useEffect(() => {
        get()
    }, [])

    return (

        <div className="Card_main" >
            {
                product.map((item) => (
                    <Link id={item.id} className='card_wrap' to={`./detail/${item.id}`}>
                        <div className='card_image'>
                            <img src={item.image} />
                        </div>
                        <div className='text'>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    </Link>
                ))
            }

        </div>
    )
}

export default Card