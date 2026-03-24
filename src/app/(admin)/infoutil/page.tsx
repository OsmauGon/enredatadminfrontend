"use client"
import {useState} from 'react'
import { simulatedInfo } from '../../../../public/infoMock';
import { IndividualMock } from '@/app/components/IndividualMock';
import { mockobjectinfo, mockobjectuser } from '@/app/types/mocktypes';
import StatusFilter from '@/app/components/StatusFilter';
import ActionButton from '@/app/components/ActionButton';
import { usuarios } from '../../../../public/usuariosMock';


export const InfoPage = () =>{
  const [info,setinfo] = useState(simulatedInfo)
  const [mockobject,setMockobject] = useState<mockobjectuser | mockobjectinfo | null>(null)
  const [shouldRender, setShouldRender] = useState<boolean>(false) 
  const [filterState,setFilterState] = useState<string>("todos")
  const filtrarPORestado = (estado :string) => {
  if (estado === "todos") {
    // mostrar todos
    setinfo(simulatedInfo);
  } else {
    // filtrar según estado
    const filtrados = simulatedInfo.filter(item => item.estado === estado);
    setinfo(filtrados);
  }
  }

  
  const verCaso = (caso: mockobjectinfo | number) =>{  
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
            <th>Titulo</th>
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 */}
            <th>Visualisar</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {info.map((inf: mockobjectinfo)=>(
            <tr key={inf.id}>
              <td>{inf.id ? inf.id : "desconocido"}</td>
              <td>{inf.idDueño ? <> <button className="btn btn-secondary" onClick={()=>verCaso(inf.id)} title='Ver usuario' disabled={shouldRender}>Usuario {inf.idDueño}</button></> : "desconocido"}</td>
              <td>{inf.title ? inf.title : "desconocido"}</td>
              {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */}
              <td><button className='btn btn-secondary' onClick={()=>verCaso(inf)} title='Ver caso' disabled={shouldRender}>Ver info</button></td>
              <td>{inf.estado}</td>
              <td>
                <ActionButton tipo={inf.estado}></ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {shouldRender && mockobject && <div className='mock-container'><button onClick={clearRender}>⬅️</button><IndividualMock data={mockobject}></IndividualMock></div>}
    </>
  )
}

export default InfoPage