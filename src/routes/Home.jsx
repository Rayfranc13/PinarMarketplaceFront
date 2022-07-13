import axios from "axios"
import { useEffect, useState } from "react"

import { ProductoCard } from "../components/ProductoCard"
import "./css/Home.css"


export function Home(){
      const [productos,setProducto]=useState([])

    const getProductos= ()=>{
       const prod= new Promise(async(resolve,reject)=>{
            
            const productos= await axios.get(`${process.env.BACK_URL}/producto`,{
                headers:{
                    "token":localStorage.getItem("token")
                }
                
            })
            resolve(productos)
          })
        const lista=prod.then(res=>{return res})
        return lista
}
    
      
    useEffect(()=>{
  let productos
  getProductos().then(r=>{productos= r.data.producto
setProducto(productos)
})
  
    },[])
    return(
        <>
        <br/>
        <div className="containera container">
       {productos.map(producto=><ProductoCard  key={producto._id} producto={producto}/>)}
       </div>
      
</>
    )
}