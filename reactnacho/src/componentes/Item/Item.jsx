
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto}) => {
    return (
      <div>
        <Link to={`/detalle/${producto.id}`}> 
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {producto.img} alt={producto.nombre} />
            <Card.Body>
              <Card.Title> {producto.nombre} </Card.Title>
              <Card.Text>
                {producto.descripcion}
              </Card.Text>
              <Card.Text>
                $ {producto.precio}
              </Card.Text>
              <Button variant="primary"> Detalle </Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  }


export default Item
