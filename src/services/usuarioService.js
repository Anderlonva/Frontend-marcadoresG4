import { axiosInstance } from "../helpers/axios-config";

const getUsuarios = () => {
    return axiosInstance.get('usuario', { 
        headers: {
            'Content-type': 'application/json'   
        }
    })
}

const postUsuarios = (data) => {

    const respuesta = axiosInstance.post('usuario/registro', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const putUsuario = (usuarioid, data) => {

    const respuesta = axiosInstance.put(`usuario/${usuarioid}`, data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};

const getUsuarioId = (usuarioId) => {

    const respuesta = axiosInstance.get(`usuario/${usuarioId}`, { //se llama la ruta deseada 
        headers: {
            'Content-type': 'application/json'   // se dice como se quiere recibir la respuesta en este caso JSON
        }
    });

    return respuesta;
};

const postLogin = (data) => {

    const respuesta = axiosInstance.post('usuario/login', data, { 
        headers: {
            'Content-type': 'application/json'   
        }
    });

    return respuesta;
};



export {
    getUsuarios,
    postUsuarios,
    putUsuario,
    getUsuarioId,
    postLogin
}