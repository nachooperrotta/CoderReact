import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import swal from 'sweetalert';

const CartContainer = () => {
    const[formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const {cartList, emptyCart, totalPrice, deleteProduct } = useCartContext()

    const insertarOrder = (e) => {
        e.preventDefault()
        const order = {}
        order.buyer = formData
        order.isActive = true
        order.items = cartList.map( ({id, nombre, precio}) => ({id, nombre, precio}))
        order.total = totalPrice()
        
        
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        
        addDoc(ordersCollection, order)
        .then ((id) => (id))
        .catch(err => console.log(err))
        .finally(() => {
            emptyCart()
            setFormData({
                name: '',
                phone: '',
                email: ''
            })

        }) 

    }

    const handleOnChange = (e) => {
       
        setFormData ({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const Alert = () => {
        swal("¡Muchas gracias!", "Id de tu pedido es: ", "success");
    }
    
    return (
    <div style={{
    width: '90%',
    maxWidth: '1500px',
    overflow: 'hidden',
    margin: 'auto',
    padding: '6% 0',}}>

        { cartList.map(producto => (
            <div key ={producto.id}>
                <img src={producto.imagen} style={{width: 200}} />
                Nombre: {producto.nombre} - Cantidad: {producto.cantidad} - Precio: {producto.precio}
                <button className="btn btn-danger" onClick={()=> deleteProduct(producto.id)}> X </button>
            </div>

        ))}
        
         <p>{totalPrice() !== 0 && `El precio Total es: ${totalPrice()}`}</p>

         <>
         <Form onSubmit={insertarOrder}>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control
                placeholder="Nombre completo"
                name= 'name'
                onChange={handleOnChange}
                value={formData.name}
                aria-label="Username"
                aria-describedby="basic-addon1"
                required
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3"></InputGroup.Text>
                <Form.Control
                placeholder="Telefono"
                name= 'phone'
                onChange={handleOnChange}
                value={formData.phone}
                aria-label="Phone"
                aria-describedby="basic-addon3"
                required
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <Form.Control
                placeholder="E-mail"
                name= 'email'
                onChange={handleOnChange}
                value={formData.email}
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                required
                />
                <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>
        <button type='sumbit' onClick={Alert} >Generar la orden</button>
        </Form>
        </>

        <button onClick ={emptyCart}>Vaciar Carrito</button>
    </div>
  )
}

export default CartContainer