import axiosInstance from "../helpers/axios-config"

const tipoServices = {
  get: () => {
    return axiosInstance.get('tipoequipos', {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  create: (data) => {
    return axiosInstance.post('tipoequipos', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  update: (id, data) => {
    return axiosInstance.put(`tipoequipos/${id}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  delete: (id) => {
    return axiosInstance.delete(`tipoequipos/${id}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }
}

export default tipoServices;