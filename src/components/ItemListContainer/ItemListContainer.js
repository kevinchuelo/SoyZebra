//se encarga de traer y llamar los datos

import { useState, useEffect } from 'react';
import { getProduct } from '../../asyncMock';
import ItemList from "../ItemList/ItemList";



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
    getProduct().then(response => {
        console.log(response)
        setProducts(response)
    }).finally(() => { setLoading(false) }).catch ('error')
}, [])

if (loading) {
     return (<h1>Loading...</h1>) 
    }

return (
    <div>
        <h1>Productos</h1>
        <ItemList products={products} />
    </div>
)
}

export default ItemListContainer;