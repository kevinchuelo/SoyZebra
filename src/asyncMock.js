const products = [
    {
        id: '1',
        name: 'Conjunto Miss Rojo',
        price: 100,
        category: 'Lenceria',
        color: 'Rojo',
        img: 'i',
        stock: 12,
        description: 'Conjunto '
    }, {
        id: '2',
        name: 'Cartera leport',
        price: 200,
        category: 'Accesorios',
        colores: 'Animal Print',
        img: 'i',
        stock: 3,
        description: 'Cartera de diseñador material textil importado'
    }, {
        id: '3',
        name: 'Corset',
        price: 350,
        category: 'Corseteria',
        color: 'Azul',
        img: 'i',
        stock: 5,
        description: 'Corset corazon material textil crep'
    }, {
        id: '4',
        name: 'Pantalon',
        price: 700,
        category: 'Pantalones',
        colores: 'Fucsia',
        img: 'i',
        stock: 2,
        description: 'Pantalon de tela liviana tipo sastrero'
    }, {
        id: '5',
        name: 'Bolso',
        price: 1400,
        category: 'Accesorios',
        colores: 'Blanco con gris',
        img: 'i',
        stock: 1,
        description: 'Bolso matero con tela impermeable ideal para esas tardes de picnic'
    }
];

export const getProduct = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}