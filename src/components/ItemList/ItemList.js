//se encarga de listar los componentes de mi array 
// map transformando los productos en componentes items
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div>
             {products.map((prod) => <Item key={prod.id} {...prod} />) }
        </div>
    )
}

export default ItemList;