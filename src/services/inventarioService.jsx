import axiosInstance from "../helpers/axios-config"

const inventarioServices = {
  get: () => {
    return axiosInstance.get('inventarios', {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  create: (data) => {
    return axiosInstance.post('inventarios', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  update: (id, data) => {
    return axiosInstance.put(`inventarios/${id}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  delete: (id) => {
    return axiosInstance.delete(`inventarios/${id}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }
}

export default inventarioServices;