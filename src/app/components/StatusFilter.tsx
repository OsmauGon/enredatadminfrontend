import React from 'react'

type Props = {
    filterState: string;
    setFilterState: (value: string)=>void
    filtrarPORestado: (value: string)=>void
}

const StatusFilter = (props: Props) => {
  return (
    <select
            id="filter-select"
            value={props.filterState}
            onChange={(e) => {
              const value = e.target.value;
              props.setFilterState(value);
              props.filtrarPORestado(value); // aquí pasamos el valor directamente
            }}
          >
            <option value="todos">Todos</option>
            <option value="habilitado">Habilitados</option>
            <option value="en espera">En espera</option>
            <option value="rechazado">Rechazados</option>
    </select>

  )
}

export default StatusFilter