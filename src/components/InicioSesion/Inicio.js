import React, { useState } from 'react';
import "../../App.css"
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { LoginCarrusel } from '../ui/LoginCarrusel'
import { postLogin } from '../../services/usuarioService';



export const Inicio = () => {

  const [valoresForm, setValoresForm] = useState({})
  const { email = '', password = '' } = valoresForm

  const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
    const { name, value } = target
    setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
  }

  const handleOnSubmit = async (e) => { // ESTEEEEEEEEEEEE
    e.preventDefault();
    const usuario = {
      email, password
    }
    try {
      swal.fire({ // sirve para mostrar alerta de cargando 
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading(); // se llama la alerta de cargando
      const { data } = await postLogin(usuario)
      const { usuarioExiste, token } = data

      console.log(token);
      console.log(usuarioExiste);
      if (token === true && usuarioExiste.rol === 'Usuario') {
        
        let timerInterval
          Swal.fire({
            title: `Bienvenid@ ${usuarioExiste.nombre} ${usuarioExiste.apellido}`,
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
              window.location.href = "../eventos"//../eventos-clientes"
            }
          })
        }
      
      if (token === true && usuarioExiste.rol === 'Admin') {

      let timerInterval
          Swal.fire({
            title: `Bienvenid@ ${usuarioExiste.nombre} ${usuarioExiste.apellido}`,
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
              window.location.href = "../eventos"
            }
          })
        }
        

    } catch (error) {
      // console.log(error);
      //swal.close();
      //let mensaje;
      //if (error && error.response && error.response.data) {
      //  mensaje = error.response.data
      //} else {
      //  mensaje = 'Usuario o contraseña Incorrectos'
      //}
      swal.fire('Error', error.response.data.msg, 'error')
    }
  }




  return (
    <div className='inicio'>

      <div className='row mt-5'>
        <div className='col-6 mtt'>
          <LoginCarrusel />
        </div>
        <div className='col-4'>
          <div className="container-login">
            <div className="credentials">
              <form onSubmit={(e) => handleOnSubmit(e)} id='formulario' >
                <div className='row'>


                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="text" name='email' value={email} required
                        onChange={(e) => handleOnChange(e)} className="form-control" />
                    </div>
                  </div>

                </div>
                <div className='row'>

                  <div className='col'>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" name='password' value={password} required
                        onChange={(e) => handleOnChange(e)} className="form-control" />
                    </div>
                  </div>
                </div>
                <div className='row mt-3'>
                  <div className='col'>
                    <button className="btn btn-primary">Iniciar </button>
                  </div>
                </div>
              </form>
              <span>No tienes una cuenta? Da click <button className='btn-regresar mt-3' onClick={() => window.location.href = "./registro"}>aqui</button></span>
            </div>
          </div>
        </div>
      </div>

    </div>

  )

};

