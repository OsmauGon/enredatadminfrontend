"use client"
import { useState } from 'react'
import {simulatedCases} from '../../../../public/casosMock'
import { IndividualMock } from '@/app/components/IndividualMock';
import StatusFilter from '@/app/components/StatusFilter';
import ActionButton from '@/app/components/ActionButton';
import { usuarios } from '../../../../public/usuariosMock';
import type { mockobjectuser } from '@/app/types/mocktypes';
import { mockobjectcase } from '@/app/types/mocktypes';


const CasosPage = () => {
  const [casos,setCasos] = useState(simulatedCases)
  const [mockobject,setMockobject] = useState<mockobjectuser | mockobjectcase | null>(null)
  const [shouldRender, setShouldRender] = useState<boolean>(false) 
  const [filterState,setFilterState] = useState<string>("todos")
  const filtrarPORestado = (estado :string) => {
  if (estado === "todos") {
    // mostrar todos
    setCasos(simulatedCases);
  } else {
    // filtrar según estado
    const filtrados = simulatedCases.filter(item => item.estado === estado);
    setCasos(filtrados);
  }
  }

  
  const verCaso = (caso: mockobjectcase | number) =>{  
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
            <th>Tipo de paciente</th>
            <th>Diagnostico</th>
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 */}
            <th>Visualisar</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {casos.map((caso)=>(
            <tr key={caso.id}>
              <td>{caso.id ? caso.id : "desconocido"}</td>
              <td>{caso.idDueño ? <> <button className="btn btn-secondary" onClick={()=>verCaso(caso.id)} title='Ver usuario' disabled={shouldRender}>Usuario {caso.idDueño}</button></> : "desconocido"}</td>
              <td>{caso.tipoPaciente ? caso.tipoPaciente : "desconocido"}</td>
              <td>{caso.dx ? caso.dx : "desconocido"}</td>
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

export default CasosPage