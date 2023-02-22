import axiosInstance from "../helpers/axios-config"

const registerServices = {
  create: (data) => {
    return axiosInstance.post('registro', data)
  }
}

export default registerServices;