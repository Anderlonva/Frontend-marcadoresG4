import { axiosInstance } from "../helpers/axios-config";

const getDeportes = () => {
    return axiosInstance.get('deporte', { 
        headers: {
            'Content-type': 'application/json'   
        }
    })
}

const postDeporte = (data) => {

    const respuesta = axiosInstance.post('deporte', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const putDeporte = (deporteid, data) => {

    const respuesta = axiosInstance.put(`deporte/${deporteid}`, data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const getDeporteId = (deporteId) => {

    const respuesta = axiosInstance.get(`deporte/${deporteId}`, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};



export {
    getDeportes,
    postDeporte,
    putDeporte,
    getDeporteId
}