//Componente de alto orden para poder compartir un solo provider
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
});

export const CartProvider = ({children}) => {
    const [cart, setcart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)

    console.log(cart)

    //Efecto secundario que me cambia el n° del carrito 
    useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart])//eslint-disable-line

    const addItem = (productToAdd) => {
        console.log('additem')
        if (!isInCart(productToAdd.id)) { setcart([...cart, productToAdd]) }

        else {console.log ("Ya esta en el carrito, por favor elimina el producto y volve agregar las cantidades necesarias")}

    }
    //Funcion que valida, referencia para saber que estamos aislando bien las responsabilidades
    const isInCart = (id) => {
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

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.quantity
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem,isInCart,getQuantity, totalQuantity,total, getProductQuantity }}>
          {children}
        </CartContext.Provider>)
}