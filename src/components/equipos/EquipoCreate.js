import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { postEquipos } from '../../services/equipoService';
import swal from 'sweetalert2';


export const EquipoCreate = () => {

    const { equipoId = '' } = useParams();
    const [ equipo, setEquipo ] = useState({})
    const [ valoresForm, setValoresForm ] = useState({})
    const { nombre = '', descripcion= '', pais = '', foto = '', estado = '' } = valoresForm

    useEffect(() => {
        if (equipo) {
          setValoresForm({  // con este recuperamos los datos del activo 
            nombre: equipo.nombre,
            descripcion: equipo.descripcion,
            foto:equipo.foto,
            pais: equipo.pais,
            estado: equipo.estado
          })
        }
      }, [equipo])

      const handleOnChange = ({ target }) => { // va a recibir los valores de los input del formulario
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value }) //... spread llama todo lo que tiene el array
    }

      const handleOnSubmit = async (e) => { // ESTEEEEEEEEEEEE
        e.preventDefault();
        const equipoUpdate = {
            nombre,descripcion,foto,pais,estado
        }
      
        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading(); // se llama la alerta de cargando
            const { data } = await postEquipos(equipoUpdate)
            console.log(data);
            alert("Equipo creado con exito!")
            swal.close();
      
        } catch (error) {
            console.log(error);
            swal.close();
            let mensaje;
            if (error && error.response && error.response.data ) {
                mensaje = error.response.data
            }else{
                mensaje = 'Ocurrio un error por favor intente de nuevo'
            }
            swal.fire('Error',mensaje,'error')
        }
      }


    return (
        <div className='container-fluid'>
            <div className="card">
                <div className='card-header'>
                    <h5 className='card-title'>Crear nuevo equipo</h5>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <form onSubmit={(e) => handleOnSubmit(e)} id='formulario' >
                            <div className='row'>
                                <div className='col-3'>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre del equipo</label>
                                        <input type="text" name='nombre' required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className="mb-3">
                                        <label className="form-label">Descripcion</label>
                                        <input type="text" name='descripcion' required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className="mb-3">
                                        <label className="form-label">Pais</label>
                                        <input type="text" name='pais' required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <div className="mb-3">
                                        <label className="form-label">link de Foto o imagen</label>
                                        <input type="text" name='foto' required
                                            onChange={(e) => handleOnChange(e)} className="form-control" />
                                    </div>
                                </div>
                                <div className='col-3'>
                                    <label className="form-label">Estado</label>
                                    <select className="form-select" name='estado'
                                        onChange={(e) => handleOnChange(e)} value={estado} >
                                        <option value=''>--Seleccionar--</option>
                                        <option value='Activo'>Activo</option>
                                        <option value='Inactivo'>Inactivo</option>

                                    </select>
                                </div>
                            </div>
                            <div className='row mt-3'>
                                    <div className='col-1'>
                                        <button className="btn btn-secondary">Agregar</button>
                                    </div>
                                    <div className='col-1'>
                                    <a type="button" className="btn btn-danger" href='/equipos'>Salir</a>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

