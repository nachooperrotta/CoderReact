import { useEffect } from "react"
import { useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getFetch } from "../utils/gFetch"

function ItemListContainer () {
  const [producto, setProducto] = useState ([])
  const [loading, setloading] = useState (true)

    useEffect(() => {
      getFetch
      .then ((respuesta) => {
        return respuesta
      })
      .then ((resp) => setProducto (resp))
      .then (err => consolge.log(err))
      .finally (() => setloading (false))
    }, [])
    return (
    <div div className ="containerItems">
      { loading ? <h2 className="loading">Cargando...</h2>
      :
      <ItemList producto = {producto}/>
      }
        
        
    </div>
  )
}

export default ItemListContainer