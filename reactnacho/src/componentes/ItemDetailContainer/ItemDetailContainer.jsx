import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"

import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState ({})
    const [loading, setLoading] = useState (true)
    const {idProducto} = useParams ()

    useEffect (() => {
        const db = getFirestore()
        const query = doc(db, 'Productos', idProducto)
        getDoc(query)
        .then(resp=> setProducto( { id: resp.id, ...resp.data() } ))
        .catch (error => console.log(error))
        .finally (() => setLoading (false))
    },[])

    return (

        <div>
            { loading ? <h2 className="loading">Cargando...</h2>
            :
            <div style={{
            width: '90%',
	        maxWidth: '1500px',
	        overflow: 'hidden',
	        margin: 'auto',
	        padding: '4% 0 0 6%',
            textAlign:'center'}}>
                
                <ItemDetail producto = {producto} />
            </div>
        }
        </div>
  )
}

export default ItemDetailContainer