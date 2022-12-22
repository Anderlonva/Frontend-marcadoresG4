import React, { useState } from 'react'
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
import { postUsuarios } from '../../services/usuarioService';


export const Registro = () => {

  const [valoresForm, setValoresForm] = useState({})
  const { nombre = '', apellido = '', email = '', foto = '', password = '' } = valoresForm

  const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
  }

  const handleOnSubmit = async (e) => { // ESTEEEEEEEEEEEE
    e.preventDefault();
    const usuarioNew = {
      nombre, apellido, email, foto, password
    }
    try {
      swal.fire({ // sirve para mostrar alerta de cargando 
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading(); // se llama la alerta de cargando
      const { data } = await postUsuarios(usuarioNew)
      console.log(data);
      let timerInterval
          Swal.fire({
            title: `Usuari@ ${data.nombre} ${data.apellido} Registad@ Con Exito`,
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 1000)
            },
            willClose: () => {
              clearInterval(timerInterval)
              swal.showLoading();
              window.location.href = "../"//../eventos-clientes"
            }
          })
      


    } catch (error) {
      console.log(error);
      swal.close();
      
      swal.fire('Error', error.response.data.msg, 'error')
    }
  }




  return (
    <>
      <div className="container-registro mt-1">
        <div className="credentials-registro">
          <form onSubmit={(e) => handleOnSubmit(e)} id='formulario' >

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" name='nombre' value={nombre} required
                  onChange={(e) => handleOnChange(e)} className="form-control" />
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Apellido</label>
                <input type="text" name='apellido' value={apellido} required
                  onChange={(e) => handleOnChange(e)} className="form-control" />
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" name='email' value={email} required
                  onChange={(e) => handleOnChange(e)} className="form-control" />
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" name='password' value={password} required
                  onChange={(e) => handleOnChange(e)} className="form-control" />
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Foto</label>
                <input type="text" name='foto' required
                  onChange={(e) => handleOnChange(e)} className="form-control" />
              </div>
            </div>

            <div className='row mt-2'>
              <div className='col-3'>
                <button className="btn btn-success" >Crear</button>
              </div>
              <div className='col '>
                <button className='btn btn-secondary ' onClick={() => window.location.href = "./"}>Regresar</button>
              </div>
            </div>

          </form>
        </div>
      </div>

    </>
  )
}



