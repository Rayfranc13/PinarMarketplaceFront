import { ListGroup, } from "react-bootstrap"
import { userActions } from "../models/userActions"

export const ActionsByRole=({rol})=>{

const adminActions=['Gestioner Productos','Gestionar Entregas','']

const result=()=>{
    switch (rol){
case 'VENDEDOR_ROLE':
return userActions;
case 'USER_ROLE':
    return userActions;
    }
}

    return(
    <>
  
  <ListGroup>
    {result().map(action=>{
    return (<ListGroup.Item action key={action.name} style={{border:"none"}}>
      {action.name}
      {action.icon}
    </ListGroup.Item>)
    })}
  </ListGroup>
    </>
)

}