import { useState } from "react"

import Button from 'react-bootstrap/Button';


const ItemCount = ({initial = 1, stock = producto.stock, onAdd}) => {
    const [ count, setCount] = useState(initial)

    const handleSuma = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }
    const handleRestar = () =>{
        if(count > initial){
            setCount(count - 1)
        }
    }

    const handleOnAdd = ()=>{
        onAdd(count)        
    }

  return (
    <div className="card mt-2 w-50" >
        <div className="card-body row" style={{display:'flex'}}>
            <div className="col">
                <Button variant="outline-dark" onClick={handleRestar}>-</Button>
            </div>
            <div className="col">
                <center>
                    <label>{count}</label>
                </center> 
            </div>
            <div className="col">
                <Button variant="outline-dark" onClick={handleSuma}>+</Button>
            </div>
        </div>
        <div>
            <Button variant="outline-dark" onClick={handleOnAdd}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount
