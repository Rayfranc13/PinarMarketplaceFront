import { useState } from "react"


export const useLogin=()=>{

      const [token,setToken]=useState('')
      const [userInfo,setUser]=useState(null)

      const login=(token,user)=>{
            setToken(token)
            setUser(user)
      }

      const logout=()=>{
          setToken('')
          setUser(null)
      }

      return {
          token,
          userInfo,
          login,
          logout
      }

}