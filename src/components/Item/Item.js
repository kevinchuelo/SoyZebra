
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price}) => {
    return (<article className="card CardItem col-3">
    <picture><img src={img} className="card-img-top ItemImg" alt={name}/></picture>
   
   <div className="card-body">
    <header className="Header"> <h1 className="card-title ItemHeader">{name}</h1></header>
    
     <p className="Info">
         Precio: ${price}
     </p>
     <button className="btn btn-dark">Comprar</button>
   </div>
 <footer className='ItemFooter'>
   <Link to={`/detail/${id}`}>Ver Mas</Link>
 </footer></article>)}

// <article className="CardItem">
// <header className="Header">
//     <h2 className="ItemHeader">
//         {Item.name}
//     </h2>
// </header>
// <picture>
//     <img src={Item.img} alt={Item.name} className="ItemImg"/>
// </picture>
// <section>
//     <p className="Info">
//         Precio: ${Item.price}
//     </p>
// </section>           
// <footer className='ItemFooter'>
//    <Link to={`/detail/${Item.id}`}>Ver Mas</Link>
// </footer>
// </article>
//     )
// }

export default Item