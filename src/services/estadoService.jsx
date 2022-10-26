import axiosInstance from "../helpers/axios-config"

const estadoServices = {
  get: () => {
    return axiosInstance.get('estadoequipos', {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  create: (data) => {
    return axiosInstance.post('estadoequipos', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  update: (id, data) => {
    return axiosInstance.put(`estadoequipos/${id}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  delete: (id) => {
    return axiosInstance.delete(`estadoequipos/${id}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }
}

export default estadoServices;