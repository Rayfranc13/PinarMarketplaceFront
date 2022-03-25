
import {  useState } from 'react';
import { Form,Row,Button,Col,Container,Card } from 'react-bootstrap';
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export const LoguinForm=()=>{
    
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    sendForm()
  };


  const sendForm=async()=>{
      const correo=document.getElementById('validationCustom01').value
    const password=document.getElementById('validationCustom02').value
    try{
    const {data:{token}} =await axios.post(`http://${process.env.BACK_URL}:4000/auth/login`,{correo,password},{
      headers:{
        "content-type":'application/json'
      }
    })
    localStorage.setItem('token',token)
    window.location.href="/"
  }catch(error){
    alert(error)
  }
  }

  return (
    <div style={{marginTop:'40px',marginBottom:'40px'}}>
    <Container  style={{justifyContent:'center'}}>
      <Row>
        <Col sm={12} md={6} style={{margin:'auto'}} >
      <Card  >
          <Card.Body>
            <Card.Title>
              Bienvenido
            </Card.Title>

    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="jondoe@example.com"
            />
          <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              El correo no es valido
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Contraseña"
          />
          <Form.Control.Feedback>Parece bien!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
  <Col >
  <label>¿Olvidaste tu contraseña?</label>
  </Col>
  <Col style={{textAlign:'end'}}>
  <a  href='#'  style={{textDecoration:'none',}}>Recuperar</a>
  </Col>
</Row>
<Row>
  <Col xs={8}></Col>
  <Col >
<Button type="submit" >Submit form</Button>
</Col>
</Row>    
      
<hr />

    </Form>

    <Row>
  <Col >
  <label>¿No tienes cuenta?</label>
  </Col>
  <Col style={{textAlign:'end'}}>
  <Button  variant='success'  >Crear cuenta</Button>
  </Col>
</Row>
    </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
    )
}