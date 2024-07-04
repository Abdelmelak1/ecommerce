import { useRef, useState, useEffect } from 'react'
import ProductsFilter from '../../components/ProductsFilter'
import Product from '../../components/Product'
import './index.css'
import Drawer from '../../components/Drawer'
import { useDispatch } from 'react-redux'
import { setFilterDrawerVisible } from '../../features/theme/themeSlice'
import axios from '../../config/axios'
import { apis } from '../../config/apisUrls'

export default () => {

    const targetRef = useRef();

    const [width, setWidth] = useState(0);

    const dispatch = useDispatch()

    const [products, setproducts] = useState([])

    useEffect(() => {

        targetRef.current && setWidth(targetRef.current.offsetWidth)

        axios.get(apis.products.all)
            .then(res => {
                setproducts(res.data.data)
            })

    }, [targetRef])

    return (
        <>
            <section className="shop spad">
                <div ref={targetRef} className="container">
                    {
                        width < 500
                        &&
                        <div className='filtertogler mb-3' >

                            <span>products (22)</span>
                            <i onClick={() => dispatch(setFilterDrawerVisible({ visible: true }))} class="las la-filter"></i>

                        </div>
                    }
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            
                            {width > 500 && <ProductsFilter />}
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">
                                {
                                    products.map(p => (
                                        <Product product={p} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Drawer />
        </>
    )
}
