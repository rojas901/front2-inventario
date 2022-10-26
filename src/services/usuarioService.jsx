import axiosInstance from "../helpers/axios-config"

const usuarioServices = {
  get: () => {
    return axiosInstance.get('usuarios', {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  create: (data) => {
    return axiosInstance.post('usuarios', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  update: (id, data) => {
    return axiosInstance.put(`usuarios/${id}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  delete: (id) => {
    return axiosInstance.delete(`usuarios/${id}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }
}

export default usuarioServices;