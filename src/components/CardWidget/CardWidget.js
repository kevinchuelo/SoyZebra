import './CardWidget.css'
import cart from '../CardWidget/Assets/Cart.png'
import { useContext } from 'react';
import { CartContext } from '../../App';

const CardWidget = () => {
    const [getQuantity] = useContext (CartContext)
    const quantity = getQuantity()
    return(
        <div to='/cart' className="CartWidget">
            <img src={cart} alt='cart-widget' className='CartImg'/>
            {quantity}
        </div>
    );
}

export default CardWidget
