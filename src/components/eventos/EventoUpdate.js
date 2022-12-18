import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUsuarios } from '../../services/usuarioService'
import { getEquipos } from '../../services/equipoService'
import { getDeportes } from '../../services/deporteService'
import { getEventoId, putEventos } from '../../services/eventoService'
import swal from 'sweetalert2';


export const EventoUpdate = ({ handleOpenModal, listarEventos }) => {

    const { eventoId = '' } = useParams()
    const [evento, setEvento] = useState({})
    const [usuarios, setUsuarios] = useState([]);
    const [equipos, setEquipos] = useState([]);
    const [deportes, setDeportes] = useState([]);
    const [valoresForm, setValoresForm] = useState({})
    const { descripcion = '', equipoUno = '', equipoDos = '', tipoDeporte = '',
        marcadorEuno = '', marcadorEdos = '', usuarioCreo = '', fechaEvento = '' } = valoresForm

    const listarUsuarios = async () => {
        try {
            const { data } = await getUsuarios(); //desestructuro la respuesta y solo recibo data
            setUsuarios(data)
        } catch (error) {
            console.log(error);
        }
    }

    const listarEquipos = async () => {
        try {
            const { data } = await getEquipos()
            setEquipos(data)
        } catch (error) {
            console.log(error);
        }
    }

    const listarDeportes = async () => {
        try {
            const { data } = await getDeportes()
            setDeportes(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarUsuarios()
    }, [])

    useEffect(() => {
        listarEquipos()
    }, [])

    useEffect(() => {
        listarDeportes()
    }, [])


    const getEvento = async () => {
        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading();
            const { data } = await getEventoId(eventoId);
            console.log(data);
            setEvento(data) // se le agrega la data a inventario
            swal.close()
        } catch (error) {
            console.log(error);
            swal.close()
        }
    }

    useEffect(() => {
        getEvento()
    }, [eventoId])

    useEffect(() => {
        if (evento) {
            setValoresForm({
                descripcion: evento.descripcion,
                equipoUno: evento.equipoUno,
                equipoDos: evento.equipoDos,
                marcadorEuno: evento.marcadorEuno,
                marcadorEdos: evento.marcadorEdos,
                fechaEvento: evento.fechaEvento,
                tipoDeporte: evento.tipoDeporte,
                usuarioCreo: evento.usuarioCreo
            })
        }
    }, [evento])




    const handleOnChange = ({ target }) => {
        const { name, value } = target
        setValoresForm({ ...valoresForm, [name]: value })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(valoresForm)
        const evento = {
            descripcion, marcadorEuno, marcadorEdos, fechaEvento,
            equipoUno: {
                _id: equipoUno
            },
            equipoDos: {
                _id: equipoDos
            },
            tipoDeporte: {
                _id: tipoDeporte
            },
            usuarioCreo: {
                _id: usuarioCreo
            }
        }
        console.log(evento);
        try {
            swal.fire({ // sirve para mostrar alerta de cargando 
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            swal.showLoading(); // se llama la alerta de cargando
            const { data } = await putEventos(eventoId, evento)
            console.log(data);
            swal.close();

        } catch (error) {
            console.log(error);
            swal.close();

            let mensaje;
            if (error && error.response && error.response.data) {
                mensaje = error.response.data
            } else {
                mensaje = 'Ocurrio un error por favor intente de nuevo'
            }
            swal.fire('Error', mensaje, 'error')
        }
    }

    return (
        <div className='sidebar-modal'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-modal-header'>
                            <h3>Modificar Evento</h3> 
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <hr />
                    </div>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <input type="text" name='descripcion' value={descripcion} required
                                        onChange={(e) => handleOnChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Equipo 1</label>
                                    <select className="form-select" required
                                        onChange={(e) => handleOnChange(e)} name='equipoUno' value={equipoUno}>
                                        <option value="">--Seleccione--</option>
                                        {
                                            equipos.map((equipo) => {
                                                return <option key={equipo._id} value={equipo._id} >
                                                    {equipo.nombre}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Equipo 2</label>
                                    <select className="form-select" required
                                        onChange={(e) => handleOnChange(e)} name='equipoDos' value={equipoDos}>
                                        <option value="">--Seleccione--</option>
                                        {
                                            equipos.map((equipo) => {
                                                return <option key={equipo._id} value={equipo._id} >
                                                    {equipo.nombre}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Marcador Equipo 1</label>
                                    <input type="text" name='marcadorEuno' value={marcadorEuno} required
                                        onChange={(e) => handleOnChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Marcador Equipo 2</label>
                                    <input type="text" name='marcadorEdos' value={marcadorEdos} required
                                        onChange={(e) => handleOnChange(e)} className="form-control" />
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Fecha Evento</label>
                                    <input type="text" name='fechaEvento' value={fechaEvento} required
                                        onChange={(e) => handleOnChange(e)} className="form-control" />
                                </div>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-4'>
                                <div className="mb-3">
                                    <label className="form-label">Deporte</label>
                                    <select className="form-select" required
                                        onChange={(e) => handleOnChange(e)} name='tipoDeporte' value={tipoDeporte}>
                                        <option value="">--Seleccione--</option>
                                        {
                                            deportes.map((deporte) => {
                                                return <option key={deporte._id} value={deporte._id} >
                                                    {deporte.nombre} </option>
                                            })
                                        }

                                    </select>
                                </div>
                            </div>

                            <div className='col-4'>
                                <div className="mb-3">
                                    <label className="form-label">Usuario</label>
                                    <select className="form-select" required
                                        onChange={(e) => handleOnChange(e)} name='usuarioCreo' value={usuarioCreo}>
                                        <option value="">--Seleccione--</option>
                                        {
                                            usuarios.map((usuario) => {
                                                return <option key={usuario._id} value={usuario._id} >
                                                    {usuario.nombre} {usuario.apellido}</option>
                                            })
                                        }

                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-1'>
                                <button className="btn btn-secondary">Guardar</button>
                            </div>
                            <div className='col-1 '>
                                <a type="button" className="btn btn-danger" href='/'>Salir</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
