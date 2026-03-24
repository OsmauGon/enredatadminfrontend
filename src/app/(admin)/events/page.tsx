"use client"
import {useState} from 'react'
import {simulatedEvents} from '../../../../public/eventMock'
import { IndividualMock } from '@/app/components/IndividualMock';
import { mockobjectuser } from '@/app/types/mocktypes';
import StatusFilter from '@/app/components/StatusFilter';
import ActionButton from '@/app/components/ActionButton';
import { usuarios } from '../../../../public/usuariosMock';

export type mockobjectevent = {
  id: number;
  idDueño: number;
  startDate: string;
  endDate: string;
  image: string;
  info: string;
  estado: "habilitado" | "en espera" | "rechazado";
}



export const EventPage = () =>{
  const [eventos,setEventos] = useState(simulatedEvents)
  const [mockobject,setMockobject] = useState<mockobjectuser | mockobjectevent | null>(null)
  const [shouldRender, setShouldRender] = useState<boolean>(false) 
  const [filterState,setFilterState] = useState<string>("todos")
  const filtrarPORestado = (estado :string) => {
  if (estado === "todos") {
    // mostrar todos
    setEventos(simulatedEvents);
  } else {
    // filtrar según estado
    const filtrados = simulatedEvents.filter(item => item.estado === estado);
    setEventos(filtrados);
  }
  }

  
  const verCaso = (caso: mockobjectevent | number) =>{  
    if(typeof caso === "number"){
      const filtrado = usuarios.filter(u=> u.id !== caso)
      setMockobject(filtrado[0])
    } else setMockobject(caso)
    setShouldRender(!shouldRender)
  }
  const clearRender = () =>{
    setShouldRender(false)
    setMockobject(null)
  }

   return (
    <>
      <h3>Gestion de casos</h3>
      <div className="barra-filtradora">
        <StatusFilter filterState={filterState} setFilterState={setFilterState} filtrarPORestado={filtrarPORestado}></StatusFilter>
        <button className="btn btn-success">Guardar cambios</button>
      </div>
      <table className='table table-bordered border-secondary'>
        <thead className='table-dark'>
          <tr>
            <th>Id</th>
            <th>Responsable</th>
            <th>Fecha Inicio</th>
            <th>Fecha Cierre</th>
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 */}
            <th>Visualisar</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((caso)=>(
            <tr key={caso.id}>
              <td>{caso.id ? caso.id : "desconocido"}</td>
              <td>{caso.idDueño ? <> <button className="btn btn-secondary" onClick={()=>verCaso(caso.id)} title='Ver usuario' disabled={shouldRender}>Usuario {caso.idDueño}</button></> : "desconocido"}</td>
              <td>{caso.startDate ? caso.startDate : "desconocido"}</td>
              <td>{caso.endDate ? caso.endDate : "desconocido"}</td>
              {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
              <td><button className='btn btn-secondary' onClick={()=>verCaso(caso)} title='Ver caso' disabled={shouldRender}>Ver info</button></td>
              <td>{caso.estado}</td>
              <td>
                <ActionButton tipo={caso.estado}></ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {shouldRender && mockobject && <div className='mock-container'><button onClick={clearRender}>⬅️</button><IndividualMock data={mockobject}></IndividualMock></div>}
    </>
  )
}

export default EventPage