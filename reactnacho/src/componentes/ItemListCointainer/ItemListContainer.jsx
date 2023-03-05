import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

import ItemList from "../ItemList/ItemList"



export const ItemListContainer = ({}) => {
  const [productos, setProductos] = useState ([])
  const [loading, setLoading] = useState (true)

  const {idCategoria} = useParams()


  
    useEffect(() => {
      setLoading(true)
      const db = getFirestore()
      const queryColecctions = collection (db, 'Productos')
      if (idCategoria) {
        const queryFilter = query(
          queryColecctions, 
          where('categoria','==',idCategoria))
        getDocs(queryFilter)
        .then (resp => setProductos( resp.docs.map(product => ({ id: product.id, ...product.data() }) )))
        .catch (error => console.log(error))
        .finally (() => setLoading (false))
      } else {
        getDocs(queryColecctions)
        .then (resp => setProductos( resp.docs.map(product => ({ id: product.id, ...product.data() }) )))
        .catch (error => console.log(error))
        .finally (() => setLoading (false))
      }  
    }, [idCategoria])
    
    return (
      <div div className ="containerItems">
        {loading ? <h2 className="loading">Cargando...</h2>
        :
        <>
          <img src="https://img.freepik.com/fotos-premium/te-yerba-mate-tradicional-tazon-sobre-mesa-madera-bebida-tipica-argentina_123827-17940.jpg?w=1380" alt="" style={{width:'100%' }} />
          <div className="productos" style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '5%',
            width: '90%',
	          maxWidth: '1500px',
	          overflow: 'hidden',
	          margin: 'auto',
	          padding: '6% 0',
          }}>
            <ItemList productos = {productos}/>
          </div>
        </>
        }
      </div>
    )
}

export default ItemListContainer