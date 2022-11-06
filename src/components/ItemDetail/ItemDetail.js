// import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import { NotificationContext } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem, isInCart, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)
    const handleOnAdd = (quantity) => {

        const productToAdd = {
            id,
            name,
            price
        }

        addItem(productToAdd, quantity)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }
    const quantityAdded = getProductQuantity(id)
    return (
        <article className="card CardItem col-3 abs-center">
            <picture><img src={img} className="card-img-top ItemImg" alt={name} /></picture>

            <div className="card-body">
                <header className="Header"> <h1 className="card-title ItemHeader">{name}</h1></header>
                <section>
                    <p className="Info">
                        Categoria: {category}
                    </p>
                    <p className="Info">
                        Descripción: {description}
                    </p>
                    <p className="Info">
                        Precio: ${price}
                    </p>
                </section>
              
            </div>
            <footer className='ItemFooter'>
                { stock !== 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} initial={quantityAdded} />: <p>No hay stock</p>}
                {
                 isInCart(id) && <Link to='/cart' className='Option' style={{ backgroundColor: 'blue'}}>Finalizar compra</Link>
                }
                
            </footer><button className="btn btn-dark">Comprar</button></article>
    )
}

export default ItemDetail