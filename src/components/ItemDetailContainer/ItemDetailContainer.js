// import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams, useNavigate } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    const navigate = useNavigate()
    console.log(productId)

    useEffect(() => {
        const docRef = doc(db, 'productos', 'productId')
        getDoc(docRef).then (response => {
            const data = response.data()
            const productsAdapted = {id: response.id, ...data}
            setProduct (productsAdapted)
        })

        .catch(console.log('error'))

        .finally (() => {setLoading (false)})
        
    }, [productId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail  {...product} />
            <button className='Option' onClick={() => navigate(-1)}>Back</button>
        </div>
    )
}

export default ItemDetailContainer