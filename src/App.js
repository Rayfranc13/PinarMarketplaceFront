import axios from 'axios'
import { Home } from './routes/Home';
import { Header } from "./components/Header"
import{useState,useEffect}from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { LoguinForm } from './components/LoguinForm';
import './App.css'
import Footer from './components/Footer';
import { useLogin } from './hooks/useLogin';


function App() {
const [usuario,setUsuario]=useState(null)

const handleUsuario=(user)=>{
  setUsuario(user)
}


useEffect(()=>{
 const token=localStorage.getItem('token')
  if(token){
    axios.get(`${process.env.BACK_URL}/usuario/perfil`,{
      headers: {
        'token': token
      }}).then(res=>{
        const tempuser=res.data
        setUsuario(tempuser)
      })
    .catch(e=>console.log(e))
  }
},)


  return (
    <div className="App">
      <Header usuario={usuario}/>
    <Routes>
        <Route path="/auth/login" element={<LoguinForm/>} />
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
