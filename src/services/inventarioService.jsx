import axiosInstance from "../helpers/axios-config"

const inventarioServices = {
  get: () => {
    return axiosInstance.get('inventarios')
  },
  getById: (id) => {
    return axiosInstance.get(`inventarios/${id}`)
  },
  create: (data) => {
    return axiosInstance.post('inventarios', data)
  },
  update: (id, data) => {
    return axiosInstance.put(`inventarios/${id}`, data)
  },
  delete: (id) => {
    return axiosInstance.delete(`inventarios/${id}`)
  }
}

export default inventarioServices;