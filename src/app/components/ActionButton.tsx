
type Props = {
    tipo: string
}

const ActionButton = ({tipo}: Props) => {
  return (
    <>
    {tipo === "en espera" ? <>
                            <button type="button" className="btn btn-primary">Habilitar</button>
                            <button type="button" className="btn btn-danger  ms-2">Rechazar</button>
                            </> 
                            : ""}
    {tipo === "habilitado" ? <button type="button" className="btn btn-warning">Suspender</button> : ""}
    {tipo === "rechazado" ? <button type="button" className="btn btn-danger">Eliminar</button> : ""}
    
    
    
    </>
  )
}

export default ActionButton