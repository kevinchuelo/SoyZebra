const products  = [
    {
        id: "1",
        name: "Conjunto Miss Rojo",
        price: "100",
        category: "Lenceria",
        color: "Rojo",
        img: "/images/IMG_2621.jpg",
        stock: "12",
        description: "Conjunto"
    }, {
        id: "2",
        name: "Cartera Leport",
        price: "200",
        category: "Accesorios",
        colores: "Animal Print",
        img: "/images/carteritamarron.jpg",
        stock: "3",
        description: "Cartera de diseñador material textil importado"
    }, {
        id: "3",
        name:"Corset",
        price: "350",
        category:"Corseteria",
        color: "Azul",
        img: "/images/corsetfloral.jpg",
        stock: "5",
        description: "Corset corazon material textil crep"
    }, {
        id: "4",
        name: "Pantalon",
        price: "700",
        category:"Pantalones",
        colores:"Fucsia",
        img: "/images/corsetfloral.jpg",
        stock: "2",
        description:"Pantalon de tela liviana tipo sastrero"
    }, {
        id: "5",
        name:"Bolso",
        price: "1400",
        category: "Accesorios",
        colores: "Blanco con gris",
        img: "/images/corsetfloral.jpg",
        stock: "1",
        description: "Bolso matero con tela impermeable ideal para esas tardes de picnic"
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}