import {Navbar,Nav,NavDropdown, Button, Form,FormControl} from 'react-bootstrap'
import { UserActions } from './UserActions'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import "./Header.css";
export function Header({usuario}){

    return(
        <>
    <Navbar bg="light" expand="lg" className='p-2'>
  
    <Navbar.Brand href="#home">
    Mercado-Pinar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">Categorias</Nav.Link>
        <NavDropdown title="Preguntas Frecuentes" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
     
        
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Button variant="light" style={{marginLeft:'10px'}}><AiOutlineShoppingCart/></Button>
      {usuario ? <UserActions usuario={usuario}/>:<div><Button href="/auth/login" className="m-1" variant="success">Log In</Button>
        <Button variant="light" >Sign Up</Button></div>}
    
      
    </Navbar.Collapse>
    

</Navbar>
        </>
    )
}