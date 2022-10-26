import axiosInstance from "../helpers/axios-config"

const marcaServices = {
  get: () => {
    return axiosInstance.get('marcas', {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  create: (data) => {
    return axiosInstance.post('marcas', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  update: (id, data) => {
    return axiosInstance.put(`marcas/${id}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  },
  delete: (id) => {
    return axiosInstance.delete(`marcas/${id}`, {
        headers: {
            'Content-type': 'application/json'
        }
    })
  }
}

export default marcaServices;