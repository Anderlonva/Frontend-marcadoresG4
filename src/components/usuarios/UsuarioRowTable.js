import React from 'react'
import { Link } from 'react-router-dom'

export const UsuarioRowTable = ({ usuario }) => {
    
    return (
        <tr>
            <td><img className='img-usuario' src={usuario.foto} alt=''></img></td>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
            <td>{usuario.email}</td>
            <td>{usuario.estado}</td>
            <td>{usuario.fechaCreacion}</td>
            <td>{usuario.fechaActualizacion}</td>

            <td><Link type="button" className="btn btn-success" to={`usuario/edit/${usuario._id}`}>Editar</Link></td>
        </tr>
    )
}
