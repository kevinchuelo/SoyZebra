//se encarga de listar los componentes de mi array 
// map transformando los productos en componentes items
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div> {products.map(prod => <Item key={prod.id} img={prod.img} name={prod.name} price={prod.price} description={prod.description} />)} </div>
    )
}

export default ItemList;