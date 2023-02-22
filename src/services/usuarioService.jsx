import axiosInstance from "../helpers/axios-config"

const usuarioServices = {
  get: () => {
    return axiosInstance.get('usuarios')
  },
  create: (data) => {
    return axiosInstance.post('usuarios', data)
  },
  update: (id, data) => {
    return axiosInstance.put(`usuarios/${id}`, data)
  },
  delete: (id) => {
    return axiosInstance.delete(`usuarios/${id}`)
  }
}

export default usuarioServices;