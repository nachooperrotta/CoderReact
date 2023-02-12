import React from 'react'
import Item from '../Item/Item'

const ItemList = ( {producto}) => {

  console.log ({producto})
  
  return (
    producto.map((prod) => <Item key = {prod.id} prod = {prod} />)
  )
}

export default ItemList