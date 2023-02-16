import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState (true)
    const {idProducto} = useParams ()

    useEffect (() => {
        gFetch (idProducto)
        .then (resp => setProducto (resp))
        .catch (error => setProducto (error))
        .finally (() => setLoading (false))
    }, [])

    return (

        <div>
            { loading ? <h2 className="loading">Cargando...</h2>
            :
            <ItemDetail producto = {producto} />
        }
        </div>
  )
}

export default ItemDetailContainer