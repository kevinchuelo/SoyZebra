// import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, price, quantity
        }
        console.log(productToAdd)
    }

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
                <button className="btn btn-dark">Comprar</button>
            </div>
            <footer className='ItemFooter'>
            <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer></article>
        // <article className="CardItem col-8">
        //     <header className="Header">
        //         <h2 className="ItemHeader">
        //             {name}
        //         </h2>
        //     </header>
        //     <picture>
        //         <img src={img} alt={name} className="ItemImg"/>
        //     </picture>
        //     <section>
        //         <p className="Info">
        //             Categoria: {category}
        //         </p>
        //         <p className="Info">
        //             Descripción: {description}
        //         </p>
        //         <p className="Info">
        //             Precio: {price}
        //         </p>
        //     </section>           
        //     <footer className='ItemFooter'>
        //         <ItemCount onAdd={handleOnAdd} stock={stock} />
        //     </footer>
        // </article>
    )
}

export default ItemDetail