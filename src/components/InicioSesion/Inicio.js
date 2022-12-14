import React, { useState } from 'react';
import "../../App.css"
import swal from 'sweetalert2';
import Swal from 'sweetalert2';
import { LoginCarrusel } from '../ui/LoginCarrusel'
import { postLogin } from '../../services/usuarioService';
import { Footer } from '../ui/Footer';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
          cookies.set('id', usuarioExiste._id, {path: "/"})
          cookies.set('nombre', usuarioExiste.nombre, {path: "/"})
          cookies.set('apellido', usuarioExiste.apellido, {path: "/"})
          cookies.set('email', usuarioExiste.email, {path: "/"})
          cookies.set('password', usuarioExiste.password, {path: "/"})
          cookies.set('foto', usuarioExiste.foto, {path:"/"})
          cookies.set('estado', usuarioExiste.estado, {path:"/"})
          cookies.set('rol', usuarioExiste.rol, {path:"/"})
          cookies.set('fechaCreacion', usuarioExiste.fechaCreacion, {path: "/"})
          cookies.set('fechaActualizacion', usuarioExiste.fechaActualizacion, {path: "/"})
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

          cookies.set('id', usuarioExiste._id, {path: "/"})
          cookies.set('nombre', usuarioExiste.nombre, {path: "/"})
          cookies.set('apellido', usuarioExiste.apellido, {path: "/"})
          cookies.set('email', usuarioExiste.email, {path: "/"})
          cookies.set('password', usuarioExiste.password, {path: "/"})
          cookies.set('foto', usuarioExiste.foto, {path:"/"})
          cookies.set('estado', usuarioExiste.estado, {path:"/"})
          cookies.set('rol', usuarioExiste.rol, {path:"/"})
          cookies.set('fechaCreacion', usuarioExiste.fechaCreacion, {path: "/"})
          cookies.set('fechaActualizacion', usuarioExiste.fechaActualizacion, {path: "/"})
        }
        

    } catch (error) {
      // console.log(error);
      //swal.close();
      //let mensaje;
      //if (error && error.response && error.response.data) {
      //  mensaje = error.response.data
      //} else {
      //  mensaje = 'Usuario o contrase??a Incorrectos'
      //}
      swal.fire('Error', error.response.data.msg, 'error')
    }
  }




  return (
    <div className='inicio'>

      <div className='row mt-5'>
        <div className='col-6 mtt'>
        <img
        src="https://images.unsplash.com/photo-1602211844066-d3bb556e983b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1113&q=80"
        alt="HomePage"
        className='img-inicio'
      >
      </img>
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
      <Footer />
    </div>

  )

};

