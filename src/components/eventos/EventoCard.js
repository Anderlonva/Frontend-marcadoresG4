import React from 'react'
import { Link } from 'react-router-dom'

export const EventoCard = ({ evento }) => {
  return (
    <div className="col" >
            <div className="card card-evento mb-1">
            <div className='row'>
                        <div className='col'>
                        <img src={evento.equipoUno.foto} className="mt-2 mx-5 img-card" alt="..." />
                        <h5 className='text-center mt-1'>{evento.equipoUno.nombre}</h5>
                        <h6 className="card-title text-center"> {evento.marcadorEuno} </h6>
                        </div>
                        
                        <div className='col'>
                        <img src={evento.equipoDos.foto} className="mt-2 mx-5 img-card" alt="..." />
                        <h5 className='text-center mt-1'>{evento.equipoDos.nombre}</h5>
                        <h6 className="card-title text-center"> {evento.marcadorEdos} </h6>
                        </div>
                    </div>
                <div className="card-body">
                    {
                        console.log(evento)
                    }

                    <h5 className="card-title text-center">VS</h5>
                    <h6 className="card-text">  {evento.descripcion} </h6>
                    <h6 className="card-title"> Marcador: {evento.marcadorEuno} - {evento.marcadorEdos } </h6>
                    <h6 className="card-title"> Deporte: {evento.tipoDeporte.nombre}</h6>
                    <h6 className="card-title"> Fecha: {evento.fechaEvento}</h6>
                    <h6 className="card-title">Crea el Evento: {evento.usuarioCreo.nombre} {evento.usuarioCreo.apellido}</h6>
                    <p className="card-text"> <Link to={`evento/edit/${evento._id}`}>Modificar</Link></p>
                </div>
            </div>
        </div>
  )
}
