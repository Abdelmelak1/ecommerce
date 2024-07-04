import ProductDetail from '../../components/ProductDetail'
import RelatedProduct from '../../components/RelatedProduct'
import { useParams } from 'react-router-dom'
import axios from '../../config/axios'
import { apis } from '../../config/apisUrls'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../../components/Loader'
export default () => {

    const { id } = useParams()

    const [product, setproduct] = useState(null)

    useEffect(() => {
        axios.get(apis.products.getone + id)
            .then(res => {
                setproduct(res.data.data)
            })
    }, [])

    return (
        <>
            <ProductDetail product={product} />
            <RelatedProduct />
        </>
    )
}
