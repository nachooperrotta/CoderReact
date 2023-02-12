import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../utils/gFetch"
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer () {
    const [producto, setProducto] = useState ([])
    const [loading, setloading] = useState (true)
    const {detalleId} = useParams ()

    useEffect (() => {
        getFetch
        .then (resp => setProducto (resp.find (prod => prod.id === detalleId)))
        .finally (() => setloading (false))
    }, [])

    return (
        <>
            { loading ? <h2 className="loading">Cargando...</h2>
            :
            <ItemDetail producto = {producto} />

            }
        </>
  )
}

export default ItemDetailContainer