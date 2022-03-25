import {Card,Button,ButtonGroup} from 'react-bootstrap'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./ProductoCard.css";

export const ProductoCard=({producto})=>{

const adicionar=()=>{
  const {_id}=producto
const resultado=document.getElementById(_id)
const cant=parseInt(resultado.innerHTML)
resultado.innerHTML=cant+1

}
const restar=()=>{
  const {_id}=producto
  const resultado=document.getElementById(_id)
  const cant=parseInt(resultado.innerHTML)
  if(cant>0)
  resultado.innerHTML=cant-1
  
  }




    return(<>
<Card style={{margin:'10px',width: '18rem' }}>
  <div className='container'>
  <Card.Img variant="top" src={producto.imag} style={{height:'18rem'}} />
  </div>
  <Card.Body style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', flexGrow:'1',flexDirection: 'column', marginBottom:'10px'}}>
    <Card.Title>{producto.nombre}</Card.Title>
    <Card.Text>
      {producto.descripcion.slice(0,50)+'...'}
    </Card.Text>
    </div>
    <div className='row' style={{display: 'flex', flexGrow:'1',flexDirection: 'column-reverse', justifyContent: 'flex-start'}} >
        <hr />
         <span style={{fontSize:'1.1em'}} >{producto.precio}<b> CUP</b></span>

      </div>
<div className='botones'>
      
    <Button variant="success"><span>Ordenar</span> <AiOutlineShoppingCart/> </Button>
    <span style={{flex:'1 auto'}}></span>
    <ButtonGroup aria-label="Basic example">
  <Button variant="secondary" onClick={function(){restar()}}>-</Button>
  <Button variant="light" id={producto._id}>0</Button>
  <Button variant="secondary" onClick={function(){adicionar()}}>+</Button>
</ButtonGroup>
    </div>
  </Card.Body>
</Card>
        </>)
}

 