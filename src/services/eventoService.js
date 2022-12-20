import { axiosInstance } from "../helpers/axios-config";

const getEventos = () => {

    const respuesta = axiosInstance.get('evento', { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};


const postEventos = (data) => {

    const respuesta = axiosInstance.post('evento', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const putEventos = (inventarioid, data) => {

    const respuesta = axiosInstance.put(`evento/${inventarioid}`, data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const getEventoId = (inventarioId) => {

    const respuesta = axiosInstance.get(`evento/${inventarioId}`, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};





export {
    getEventos,
    postEventos,
    putEventos,
    getEventoId
}