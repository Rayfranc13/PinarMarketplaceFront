import {Offcanvas, Button,} from 'react-bootstrap'
import { useState } from 'react';
import {BsFillPersonFill} from 'react-icons/bs'
import { ActionsByRole } from './ActionsByRole';
import "./Header.css";
export const UserActions=({usuario:{
    nombre,
    rol
}})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
   <Button className="user-button" variant="secondary" style={{borderRadius:'50px'}} onClick={handleShow}>
   <BsFillPersonFill style={{float:'right'}}/> 
    </Button>

    <Offcanvas show={show} placement={'end'} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Acciones</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
       <ActionsByRole rol={rol}/>
      </Offcanvas.Body>
    </Offcanvas>
  </>
       
    )
}