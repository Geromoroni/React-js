import {useEffect, useState} from "react"
import ItemList from "./ItemList"
const productosIniciales = [
    {titulo:"Remera 1",precio:500}
    ,{titulo:"Remera 2", precio:250}
]


const ItemListContainer =()=>{

    const [productos,setProductos] = useState([])
    
    useEffect(()=>{
        const mock_async = new Promise((resolver)=>{
            setTimeout(()=>{
                resolver(productosIniciales)
            },2000)
     })
     mock_async
          .then((resultado)=>{
              setProductos(resultado)

          })
    })


if(productos.length > 0){
    return(
        <>
        <ItemList productos={productos}/>
        </>
    );
}else{
    return(
        <>
        <p>cargando...</p>
        </>
    )}
}
export default ItemListContainer