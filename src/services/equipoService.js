import { axiosInstance } from "../helpers/axios-config";

const getEquipo = () => {
    return axiosInstance.get('equipo', { 
        headers: {
            'Content-type': 'application/json'   
        }
    })
}

const postEquipo = (data) => {

    const respuesta = axiosInstance.post('equipo/', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const putEquipo = (equipoId, data) => {

    const respuesta = axiosInstance.put(`equipo/${equipoId}`, data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });
    return respuesta;
};

const getEquipoId = (equipoId) => {

    const respuesta = axiosInstance.get(`equipo/${equipoId}`, { //se llama la ruta deseada 
        headers: {
            'Content-type': 'application/json'   // se dice como se quiere recibir la respuesta en este caso JSON
        }
    });

    return respuesta;
};
const deleteEquipo = (equipoId) => {

    const respuesta = axiosInstance.delete(`equipo/${equipoId}`, { //se llama la ruta deseada 
        headers: {
            'Content-type': 'application/json'   // se dice como se quiere recibir la respuesta en este caso JSON
        }
    });

    return respuesta;
};


export {
    getEquipo,
    postEquipo,
    putEquipo,
    getEquipoId,
    deleteEquipo
}