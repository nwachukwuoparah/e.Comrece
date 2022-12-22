
import './detail.css'
import { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom"
const Detail = () => {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const getItem = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setItems(res.data)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getItem()
    }, [])

    return (
        <div className='detail_wrap'>
            <div className='detail_holder'>
                <div className='detail_holder-left'>
                    <div className='Image'>
                        <img className='detail_image' src={items.image} />
                    </div>
                    {/* <p>{items.title}</p> */}
                </div>
                <div className='detail_holder-right'>
                    <div className='detail_holder-right1'>
                        <p> <b>Description: </b>{items.description} </p>
                        <p><b>Category:</b> {items.category}</p>
                        <p>{items.title}</p>
                        <p>Price: {items.price}</p>
                        <button id='Botton'>Add to Cart</button>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default Detail