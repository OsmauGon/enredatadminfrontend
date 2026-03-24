"use client"
import {useState} from 'react'
import { usuarios } from '../../../../public/usuariosMock'
import { IndividualMock } from '@/app/components/IndividualMock';
import StatusFilter from '@/app/components/StatusFilter';
import ActionButton from '@/app/components/ActionButton';
import { mockobjectuser } from '@/app/types/mocktypes';



const UsersPage =()=>{
  const [users,setusers] = useState(usuarios)
  const [mockobjectuser,setMockobjectuser] = useState<mockobjectuser | null>(null)
  const [shouldRender, setShouldRender] = useState<boolean>(false) 
  const [filterState,setFilterState] = useState<string>("todos")
  const filtrarPORestado = (estado :string) => {
  if (estado === "todos") {
    // mostrar todos
    setusers(usuarios); 
  } else {
    // filtrar según estado
    const filtrados = usuarios.filter(item => item.estado === estado);
    setusers(filtrados);
  }
  }

  
  const verCaso = (caso: mockobjectuser | number) =>{  
    if(typeof caso === "number"){
      const filtrado = usuarios.filter(u=> u.id !== caso)
      setMockobjectuser(filtrado[0])
    } else setMockobjectuser(caso)
    setShouldRender(!shouldRender)
  }
  const clearRender = () =>{
    setShouldRender(false)
    setMockobjectuser(null)
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
            <th>Nombre</th>
            <th>Rol</th>
            {/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4 */}
            <th>Visualisar</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {users.map((caso)=>(
            <tr key={caso.id}>
              <td>{caso.id ? caso.id : "desconocido"}</td>
              <td>{caso.nombre ? caso.nombre : "desconocido"}</td>
              <td>{caso.rol ? caso.rol : "desconocido"}</td>
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
      {shouldRender && mockobjectuser && <div className='mock-container'><button onClick={clearRender}>⬅️</button><IndividualMock data={mockobjectuser}></IndividualMock></div>}
    </>
  )

}

export default UsersPage