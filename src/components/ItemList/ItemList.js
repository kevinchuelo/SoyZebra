//se encarga de listar los componentes de mi array 
// map transformando los productos en componentes items
import Item from "../Item/Item";
// import './ItemList.css'

const ItemList = ({ products, setPage }) => {
    return (
        <div className='ListGroup row abs-center' onClick={() => console.log('hice click en itemlist')}>
             {products.map(prod => <Item key={prod.id} {...prod} setPage={setPage} />) }
        </div>
    )
}

export default ItemList;