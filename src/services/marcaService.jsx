import axiosInstance from "../helpers/axios-config"

const marcaServices = {
  get: () => {
    return axiosInstance.get('marcas')
  },
  create: (data) => {
    return axiosInstance.post('marcas', data)
  },
  update: (id, data) => {
    return axiosInstance.put(`marcas/${id}`, data)
  },
  delete: (id) => {
    return axiosInstance.delete(`marcas/${id}`)
  }
}

export default marcaServices;