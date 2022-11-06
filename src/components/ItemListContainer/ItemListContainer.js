//se encarga de traer y llamar los datos
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemListContainer = ({ greeting  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
     const collectionRef = categoryId ? query(collection (db, 'productos'), where ('category', '==', categoryId)) : collection (db, 'productos')
       
        getDocs(collectionRef).then(response => {

           
            //adaptamos el producto de la base de datos mapéandolo
            const productsAdapted = response.docs.map (doc => {const data = doc.data ()
        
            //juntamos el id de la base de datos
        return {id: doc.id, ...data}})
        setProducts (productsAdapted)}).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })  
        
    }, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }


    return (
        <div className='abs-center' onClick={() => console.log('click en itemlistcontainer')}>
            <ItemList  products={products} />
        </div>
    )
}

export default ItemListContainer