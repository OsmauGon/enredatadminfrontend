/*Este componente sera el que verifique que exista en el localstorage la sesion iniciada de un admin */
/*Si se inteta acceder a /dashboard este componente recibe al usuario y verifica si esta logueado en el localstorage */
"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AuthGuard({children}: {children: React.ReactNode}){
    const router = useRouter()
    const [isAuth,setIsAuth] = useState<boolean | null>(null)

    useEffect(()=>{
        const auth = localStorage.getItem("auth")
        //aqui podrias poner una logica tome el token y lo mande al backend para verificar si no ha caducado

        if(!auth){
            router.replace('/login')
            return
        } 
    
        setIsAuth(true)
    },[router])

        if(isAuth === null){
            return <p>Verificando visitante...</p>
        }
        
        return <>{children}</>
}