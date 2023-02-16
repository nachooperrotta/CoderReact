import { useCartContext } from "../../context/CartContext"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({producto}) => {

  const {agregarCarrito} = useCartContext()

  const onAdd = (cant) => {
    console.log(cant)
    /* agregarCarrito({ ...producto, cantidad: cant}) */
  }

  return (
    <div>
      <div>
        <Card style={{ width: '50rem' }}>
          <Card.Img variant="top" src= {producto.img} alt={producto.nombre} />
            <Card.Body>
              <Card.Title> {producto.nombre} </Card.Title>
              <Card.Text>
                {producto.descripcion}
              </Card.Text>
              <Card.Text>
                $ {producto.precio}
              </Card.Text>
              <Button variant="primary"> Ver descripcion </Button>
            </Card.Body>
          </Card>
      </div>
      <div>
        <ItemCount initial ={1} stock = {producto.stock} onAdd ={onAdd}/>
      </div>
    </div>
  )
}

export default ItemDetail
