import React, { Component } from 'react'
import logoNav from '../ui/android-chrome-192x192.png'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import axios from 'axios'

let cookies = new Cookies()

const url = "http://localhost:5000/usuario"

const imgAvatar = cookies.get("foto") === "" ? <i className="ri-user-line mx-1"></i> : <img className="img-avatar" src={cookies.get("foto")} ></img>

class HeaderAdmin extends Component { 
  state={
    form:{
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        foto: '',
        estado: cookies.get("estado"),
        rol: cookies.get("rol"),
        fechaCreacion: cookies.get("fechaCreacion"),
        fechaActualizacion: cookies.get("fechaActualizacion"),
    }
}


  closeSesion=()=>{
    Swal.showLoading();
    window.location.href = "../"
  }

    handleShow=async()=>{
      const { value: formValues } = await Swal.fire({
        title: 'Actualizacion de datos',
        html:
        '<p id="input-nombres">Nombres:</p>'+
        '<input type="text" id="swal-input-nombres" class="except" name="nombre">' +
        '<p id="input-apellidos">Apellidos:</p>'+
        '<input type="text" id="swal-input-apellidos" class="except" name="apellido">'+
        '<p id="input-email">Email:</p>'+
        '<input type="text" id="swal-input-email" name="email">'+
        '<p id="input-contraseña">Contraseña:</p>'+
        '<input type="password" id="swal-input-contraseña" name="password">'+
        '<p id="input-foto">Foto de perfil:</p>'+
        '<input type="text" id="swal-input-foto" name="foto">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input-nombres').value,
            document.getElementById('swal-input-apellidos').value,
            document.getElementById('swal-input-email').value,
            document.getElementById('swal-input-contraseña').value,
            document.getElementById('swal-input-foto').value
          ]
        }
      })
      
      if (formValues) {
        await this.setState({
          form:{
            ...this.state.form,
            nombre: formValues[0],
            apellido: formValues[1],
            email: formValues[2],
            password: formValues[3],
            foto: formValues[4],
          }
        })    
      }

      if(this.state.form.nombre === "" || this.state.form.apellido === "" || this.state.form.email === "" || this.state.form.password === "" || this.state.form.foto === ""  ){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Intente nuevamente digitando todos los campos',
        })
      }

      else{
        let timerInterval
        axios.put(url+"/"+cookies.get("id"), this.state.form).then(response =>{
          Swal.fire({
            title: "Usuario actualizado correctamente",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              cookies.set('nombre', this.state.form.nombre, {path: "/"})
              cookies.set('apellido', this.state.form.apellido, {path: "/"})
              cookies.set('email', this.state.form.email, {path: "/"})
              cookies.set('password', this.state.form.password, {path: "/"})
              cookies.set('foto', this.state.form.foto, {path:"/"})
              clearInterval(timerInterval)
              Swal.showLoading();
              window.location.href = "./eventos"
            }})
        })
      }
}
 

  render(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-menu  mb-3">
  <div className="container-fluid">
    <a className="navbar-brand text-nav"  href="/eventos">
    <img src={logoNav} alt="" width="35" height="30" className="d-inline-block align-text-top mx-3"/>Marcadores</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-nav"   aria-current="page" href="/eventos">Eventos</a>
        </li>
        {cookies.get("rol") === "Admin" ? <li className="nav-item">
          <a className="nav-link text-nav"   aria-current="page" href="/usuarios">Usuarios</a>
        </li> : ""}
        {cookies.get("rol") === "Admin" ? <li className="nav-item">
          <a className="nav-link text-nav"  aria-current="page" href="/equipos">Equipos</a>
        </li> : ""}
      </ul>
      <NavDropdown title=<span className='avatar'>{imgAvatar}<span className='mx-1'>{cookies.get("nombre")}</span></span> id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" variant="primary" onClick={()=>this.handleShow()}>Actualizar datos</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" onClick={() => this.closeSesion()}>Cerrar sesion</NavDropdown.Item>
      </NavDropdown>
    </div>
  </div>
</nav>
  )
}
}

export default HeaderAdmin;