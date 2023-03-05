import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

import ItemCount from "../ItemCount/ItemCount"

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'





const ItemDetail = ({producto}) => {
  const [isCount, setIsCount] =useState (true)

  const {addCart} = useCartContext()

  const onAdd = (cant) => {
    console.log(cant)
    addCart({ ...producto, cantidad: cant})
    setIsCount(false)
  }


  return (
    <div style={{
      display:'flex',
      gap: '5%',
      width: '90%',
      maxWidth: '1500px',
      overflow: 'hidden',
      margin: 'auto',
      padding: '3% 0 0 0',
    }}> 
      <div>
        <Card style={{ width: '300px'}}>
          <Card.Img variant="top" src= {producto.imagen} alt={producto.nombre} />
            <Card.Body>
              <Card.Title> {producto.nombre} </Card.Title>
              <Card.Text>
                {producto.descripcion}
              </Card.Text>
              <Card.Text>
                $ {producto.precio}
              </Card.Text>
            </Card.Body>
          </Card>
      </div>
      <div className="contador" style={{ width:'100%', height:'150px'}}>
        {
          isCount ?
          <ItemCount initial ={1} stock = {producto.stock} onAdd ={onAdd}/>
          :
          <>
            <Button variant="outline-dark"><Link to="/cart">Ir al carrito</Link></Button>
            <Button variant="outline-dark"><Link to="/">Volver al home</Link></Button>
          </>
        }
        
      </div>
    </div>
  )
}

export default ItemDetail
