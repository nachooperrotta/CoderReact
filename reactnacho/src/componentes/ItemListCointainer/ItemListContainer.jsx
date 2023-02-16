import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import { gFetch } from "../utils/gFetch"

export const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState (true)

  const {idCategoria} = useParams()

    useEffect(() => {
      if (idCategoria) {
        gFetch ()
          .then (res => {
            setProductos (res.filter(producto => producto.categoria === idCategoria))
          })
          .catch (error => console.log(error))
          .finally (() => setLoading (false))
      } else {
        gFetch ()
          .then (res => {
            setProductos(res)
          })
          .catch (error => console.log(error))
          .finally (() => setLoading (false))
      }
      
    }, [idCategoria])
    
    return (
    <div div className ="containerItems">
      { loading ? <h2 className="loading">Cargando...</h2>
      :
      <ItemList productos = {productos}/>
      }
        
        
    </div>
  )
}

export default ItemListContainer