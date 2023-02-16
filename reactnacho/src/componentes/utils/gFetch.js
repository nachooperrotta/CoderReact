
let productos = [
    {id: "1", nombre: "Canarias", img: "", categoria: "yerbas", decripcion: "Canarias de sabor tradicional", stock: 10, precio: 1200},
    {id: "2", nombre: "Sara", img: "", categoria: "yerbas", decripcion: "Sara de sabor tradicional", stock: 10, precio: 1000},
    {id: "3", nombre: "ReiVerde", img: "", categoria: "yerbas", decripcion: "ReiVerde de sabor tradicional", stock: 10, precio: 700},
    {id: "4", nombre: "Mate imperial", img: "", categoria: "mates", decripcion: "Mate imperial de cuero", stock: 5, precio: 7000},
    {id: "5", nombre: "Mate camionero", img: "", categoria: "mates", decripcion: "Mate camionero de cuero", stock: 5, precio: 4000},
]
export const gFetch = (id) => {
    return new Promise (( res, rej ) => {
        setTimeout (()=>{
            res ( id ? productos.find (producto => producto.id === id): productos)
        }, 1000)
    })
}