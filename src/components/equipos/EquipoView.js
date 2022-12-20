
import React, { useState, useEffect } from 'react'
import { getEquipos } from '../../services/equipoService';
import { EquipoRowTable } from './EquipoRowTable';
import { Link } from 'react-router-dom';

export const EquipoView = () => {

  const [equipos, setEquipos] = useState([]);
  const listarEquipos = async () =>{
    try {
      const { data } = await getEquipos();
      setEquipos(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  /*const eliminarEquipo = async () =>{
    try {
      const usuario = await equipos.findByIdAndDelete(
        {_id:equipos.id}
    )
    res.json({
        message: 'Usuario eliminado con exito!'
    }) 
    } catch (error) {
      console.log(error)
    }
    return eliminarEquipo()
  }*/

  useEffect(() => {
    listarEquipos()
  }, [])

  return (
    
    <div className='container'>
      <div className='row mt-5'>
        <table className="table table-striped">
          <thead>
            <tr className="container text-center">
              <th scope="col">Bandera</th>
              <th scope="col">Nombre del equipo</th>
              <th scope="col">Descripción</th>
              <th scope="col">Pais</th>
              <th scope="col">Estado</th>
              <th scope="col">Fecha Creacion</th>
              <th scope="col">Fecha Actualizacion</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              equipos.map((equipo) => {
                return <EquipoRowTable key={equipo._id} equipo={equipo} equipos={equipos}/>
              })
            }
          </tbody>
          <Link type="button" className="btn btn-primary mt-3" to={`equipo/create`}>Agregar nuevo equipo</Link>          
        </table>
      </div>
    </div>
  )
}


