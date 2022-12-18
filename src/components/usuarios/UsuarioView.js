import React, { useState, useEffect } from 'react'
import { getUsuarios } from '../../services/usuarioService';
import { UsuarioRowTable } from './UsuarioRowTable';

export const UsuarioView = () => {

  const [valoresForm, setValoresForm] = useState({})
  const { nombre = '', apellido = '', email = '', estado = '' } = valoresForm
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

  const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
  }



  return (
    <>
      <div className='container'>
        <div className='row mt-5'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
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

                  return <UsuarioRowTable key={usuario._id} usuario={usuario} />
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
