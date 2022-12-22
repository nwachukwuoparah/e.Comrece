import './Comp.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Component/Cards'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './business-poses-for-days.jpg'
import image2 from './shirts-on-table.jpg'
import image3 from './young-woman-looking-into-the-trees.jpg'
function Comp() {
    // const [product, SetProduct] = useState([])
    // async function get() {
    //     try {
    //         const res = await axios.get('https://fakestoreapi.com/products')
    //         console.log(res.data)
    //         SetProduct(res.data)

    //     } catch (err) {
    //         if (error.response) {
    //             console.log(error.response.data)
    //             console.log(error.response.status)
    //             console.log(error.response.headers)
    //         } else if (error.request) {
    //             console.log(error.response.request)
    //         } else {
    //             console.log('Error', error.message)
    //         }
    //         console.log(err.config)
    //     }
    // }

    // useEffect(() => {
    //     get()
    // }, [])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='root'>
            <div className='Wrap'>
                <div className='Body_holder'>
                    <h2> Single Item</h2>
                    <Slider className='slider' {...settings}>
                        <div className='image'>
                            <img src={image1} />
                        </div>
                        <div className='image'>
                            <img src={image2} />
                        </div>
                        <div className='image'>
                            <img src={image3} />
                        </div>
                        <div className='image'>
                            <img src={image1} />
                        </div>
                        <div className='image'>
                            <img src={image2} />
                        </div>
                        <div className='image'>
                            <img src={image1} />
                        </div>
                    </Slider>
                </div>
                <Card />
            </div>

        </div>
    )


}
export default Comp