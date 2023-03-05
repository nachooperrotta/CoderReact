
let productos = [
    {id: '1', nombre: 'Canarias', imagen: 'https://d22fxaf9t8d39k.cloudfront.net/ad0845d5545f05ccadaf19968bcffcbf59bd8d3ce90444ac5401ea08ed90479c92669.png', categoria: 'yerbas', detalle: 'Canarias de sabor tradicional', stock: 10, precio: 1200},
    {id: '2', nombre: "Sara", imagen: 'https://d22fxaf9t8d39k.cloudfront.net/9eef90dac502243481c85c62e9e24d9828bfc51bba803988e7dfb6bac702430292669.png', categoria: "yerbas", ddetalle: 'Sara de sabor tradicional', stock: 10, precio: 1000},
    {id: '3', nombre: "Mate imperial", imagen: 'https://d22fxaf9t8d39k.cloudfront.net/ecb1914c9c45f61faaf095ed52739fe8afa473afa0a5d15001dd683f5bf8548992669.png', categoria: "mates", detalle: 'Mate imperial de cuero', stock: 5, precio: 7000},
    {id: '4', nombre: "Mate camionero", imagen: 'https://d22fxaf9t8d39k.cloudfront.net/00a1749b1d4cf140037a1e8b923c6a663203d37fa1a3392344361c02b38641cc92669.jpeg', categoria: "mates", detalle: 'Mate camionero de cuero', stock: 5, precio: 4000},
]
export const gFetch = (id) => {
    return new Promise (( res, rej ) => {
        setTimeout (()=>{
            res ( id ? productos.find (producto => producto.id === id): productos)
        }, 1000)
    })
}