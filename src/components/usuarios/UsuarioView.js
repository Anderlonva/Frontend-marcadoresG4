import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../services/usuarioService';
import { UsuarioRowTable } from './UsuarioRowTable';

export const UsuarioView = () => {

  const [usuarios, setUsuarios] = useState([]);

  const listarUsuarios = async () => {
    try {
      const { data } = await getUsuarios(); //desestructuro la respuesta y solo recibo data
      setUsuarios(data)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarUsuarios()
  }, [])



  return (
    <>
    <div className='container'>
    <div className='row mt-5'>
            <table className="table table-striped">
              <thead>
                <tr>
                  
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Email</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Fecha creación</th>
                  <th scope="col">Fecha Actualización</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {
                  usuarios.map((usuario) => {

                    return <UsuarioRowTable key={usuario._id} usuario={usuario} usuarios={usuarios}/>
                  })
                }
              </tbody>
            </table>
          </div>
          </div>
    </>
  )
}
