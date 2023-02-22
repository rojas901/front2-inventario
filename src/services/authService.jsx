import axiosInstance from "../helpers/axios-config"

const authServices = {
  create: (data) => {
    return axiosInstance.post('login', data)
  }
}

export default authServices;