import React, { useEffect, useState } from 'react'
import { getEventos } from '../../services/eventoService'
import swal from 'sweetalert2';
import { EventoCard } from './EventoCard';
import  { EventoNew } from './EventoNew';


export const EventoView = () => {

  const [eventos, setEventos] = useState([]);
  const [openEventoNew, setOpenEventoNew] = useState(false);

  const listarEventos = async () => {
    try {
      swal.fire({ 
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      swal.showLoading();
      const { data } = await getEventos();
      setEventos(data);
      console.log(data);
      swal.close()
    } catch (error) {
      console.log(error)
      swal.close()
    }
  };

  useEffect(() => {
    listarEventos();
  }, [])

  const handleOpenModal = () => {
    setOpenEventoNew(!openEventoNew)
  }

  return (
    <>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 mb-3">
          {
            eventos.map((evento) => {
              return <EventoCard key={evento._id} evento={evento} />
            })
          }
        </div>
        {
          openEventoNew ? 
            <EventoNew handleOpenModal={handleOpenModal} listarEventos={listarEventos} />
            :                 // else
            <button type="button" className="btn btn-secondary fab"
              onClick={handleOpenModal} >
              <i className="fa-solid fa-plus"></i></button>
        }
      </div>
    </>
  )
}
