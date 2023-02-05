let productos = [
    {id: "1", nombre: "Canarias", imagen: "", categoria: "yerbas", decripcion: "Canarias de sabor tradicional", stock: 10, precio: 1200},
    {id: "2", nombre: "Sara", imagen: "", categoria: "yerbas", decripcion: "Sara de sabor tradicional", stock: 10, precio: 1000},
    {id: "3", nombre: "ReiVerde", imagen: "", categoria: "yerbas", decripcion: "ReiVerde de sabor tradicional", stock: 10, precio: 700},
]
export const getFetch = new Promise ((respuesta, rejected) => {
    let url = productos
    if (url === productos) { 
        setTimeout (() => {
            respuesta (productos);
        }, 2000);
    } else {
        rejected ("Error")
    }
})