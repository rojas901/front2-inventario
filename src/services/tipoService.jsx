import axiosInstance from "../helpers/axios-config"

const tipoServices = {
  get: () => {
    return axiosInstance.get('tipoequipos')
  },
  create: (data) => {
    return axiosInstance.post('tipoequipos', data)
  },
  update: (id, data) => {
    return axiosInstance.put(`tipoequipos/${id}`, data)
  },
  delete: (id) => {
    return axiosInstance.delete(`tipoequipos/${id}`)
  }
}

export default tipoServices;