import { memo } from 'react';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = memo(({producto}) => {
    return (
      <div>
        <Link to={`/detalle/${producto.id}`}> 
          <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src= {producto.imagen} alt={producto.nombre} />
            <Card.Body className='card'>
              <Card.Title className='nombre'> {producto.nombre} </Card.Title>
              <Card.Text className='precio'>
                ${producto.precio}
              </Card.Text>
              <Button variant="outline-dark" className='detalle' size="lg">Ir al producto</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  }
)

export default Item
