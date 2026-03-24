"use client"


import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { usuarios } from "../../../../public/usuariosMock"
import { mockobjectcase, mockobjectinfo, mockobjectuser } from "@/app/types/mocktypes"
import { simulatedCases } from "../../../../public/casosMock"
import { simulatedEvents } from "../../../../public/eventMock"
import { mockobjectevent } from "../events/page"
import { simulatedInfo } from "../../../../public/infoMock"

export default function DashboardPage (){
    const router = useRouter()
    const [uss] = useState(usuarios)
    const [cas] = useState(simulatedCases)
    const [eve] = useState(simulatedEvents)
    const [inf] = useState(simulatedInfo)

    useEffect(()=>{
        const isAuth = localStorage.getItem("auth")
        if(!isAuth){
            router.push('/login')
        }
    },[])

    return (
        
        <div style={{padding: 20}}>
            <h2>Dashboard privado de admin</h2>
            <div className="dashboard dashboard-usuarios">
                <h3>Usuarios registrados: {uss.length}</h3>
                <ul>
                    <li>Usuarios habilitados: <b>{uss.filter((x: mockobjectuser) => x.estado === "habilitado").length}</b></li>
                    <li>Usuarios en espera: <b>{uss.filter((x: mockobjectuser) => x.estado === "en espera").length}</b></li>
                    <li>Usuarios rechazados: <b>{uss.filter((x: mockobjectuser) => x.estado === "rechazado").length}</b></li>
                </ul>
            </div>
            <hr />
            <hr />
            <div className="dashboard dashboard-casos">
                <h3>Casos registrados: {uss.length}</h3>
                <ul>
                    <li>casos habilitados: <b>{cas.filter((x:mockobjectcase) => x.estado === "habilitado").length}</b></li>
                    <li>casos en espera: <b>{cas.filter((x:mockobjectcase) => x.estado === "en espera").length}</b></li>
                    <li>casos rechazados: <b>{cas.filter((x:mockobjectcase) => x.estado === "rechazado").length}</b></li>
                </ul>
            </div>
            <hr />
            <hr />
            <div className="dashboard dashboard-eventos">
                <h3> Eventos registrados: {uss.length}</h3>
                <ul>
                    <li>Eventos habilitados: <b>{eve.filter((x: mockobjectevent) => x.estado === "habilitado").length}</b></li>
                    <li>Eventos en espera: <b>{eve.filter((x: mockobjectevent) => x.estado === "en espera").length}</b></li>
                    <li>Eventos rechazados: <b>{eve.filter((x: mockobjectevent) => x.estado === "rechazado").length}</b></li>
                </ul>
            </div>
            <hr />
            <hr />
            <div className="dashboard dashboard-Informacion">
                <h3> Informacion registrados: {uss.length}</h3>
                <ul>
                    <li>Informacion habilitados: <b>{inf.filter((x: mockobjectinfo) => x.estado === "habilitado").length}</b></li>
                    <li>Informacion en espera: <b>{inf.filter((x: mockobjectinfo) => x.estado === "en espera").length}</b></li>
                    <li>Informacion rechazados: <b>{inf.filter((x: mockobjectinfo) => x.estado === "rechazado").length}</b></li>
                </ul>
            </div>
            <hr />
            <hr />
        </div>
    )
}