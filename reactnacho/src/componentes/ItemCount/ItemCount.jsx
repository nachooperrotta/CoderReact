/* import { useState } from "react"

const ItemCount = ( {stock, inicial, onAdd} ) => {

const [count, setCount] = useState (inicial)

const sumar = () => {
    if (stock > count){
        setCount (count + 1)
    }
}

const restar = () => { 
    if (count > 1 ){
        setCount (count - 1)
    }
}

const AgregarCantidad = () => {
    onAdd (count)
}

    return (
        <>
        <div>
            <button className="boton1" onClick = {restar}> - </button>

            <label> {count} </label>

            <button className="boton2" onClick = {sumar}> + </button> 
        </div>
        <button onClick = {AgregarCantidad}> Añadir al carrito </button>
        </>
    )
}

export default ItemCount;
 */