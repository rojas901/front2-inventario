import axiosInstance from "../helpers/axios-config"

const estadoServices = {
  get: () => {
    return axiosInstance.get('estadoequipos')
  },
  create: (data) => {
    return axiosInstance.post('estadoequipos', data)
  },
  update: (id, data) => {
    return axiosInstance.put(`estadoequipos/${id}`, data)
  },
  delete: (id) => {
    return axiosInstance.delete(`estadoequipos/${id}`)
  }
}

export default estadoServices;