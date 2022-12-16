import './Detail.css'
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
                    <h4>{items.title}</h4>
                </div>
                <div className='detail_holder-right'>
                    <div className='detail_holder-right1'>
                        <h3>Description:{items.description} </h3>
                        <p>Category:{items.category}</p>
                        {/* <p>Rating: {items.rating.rate}</p>
                        <p>Votes: {items.rating.count}</p> */}
                        <button>Add to Cart</button>
                    </div>

                </div>

            </div>
        </div >

    )
}

export default Detail