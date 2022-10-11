
const Item = ( id, name, img, price, description) => {
    return (
  <div className="card" style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt={name}/>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="card-text">{description}</p>
    <p>{price}</p>
    <button className="btn btn-dark">Comprar</button>
  </div>
</div>
    )
}

export default Item;