import './CardWidget.css'
import cart from '../CardWidget/Assets/Cart.png'

const CardWidget = () => {

    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {10}
        </div>
    );
}

export default CardWidget
