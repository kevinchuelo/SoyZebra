//Componente de alto orden para poder compartir un solo provider
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
});

export const CartProvider = ({children}) => {
    const [cart, setcart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    //Efecto secundario que me cambia el n° del carrito 
    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart])

    const addItem = (productAdd) => {
        if (!isInCart(productAdd.id)) { setcart([...prod, productToAdd]) }

        else {"Ya esta en el carrito, por favor elimina el producto y volve agregar las cantidades necesarias"}

    }
    //Funcion que valida, referencia para saber que estamos aislando bien las responsabilidades
    const isInCart = () => {
        return cart.some(prod => prod.id === id)
    }
    const removeItem = (id) => {
        const cartEmpty = cart.filter(prod => prod.id !== id)
        setcart(cartEmpty)
    }
    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu = + prod.quantity
        })
        return accu;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity }}>
            {children}
        </CartContext.Provider>)
}