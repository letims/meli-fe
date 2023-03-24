import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getPurchasesUrl, getUserUrl } from "../../utils/urlUtil";

const BASE_URL = 'http://localhost:8000'
const BASE_CONFIG: AxiosRequestConfig = {
  timeout: 15000,
  responseType: 'json'
}

class MeliApiService {
  static instance: AxiosInstance;

  static getInstance() {
    if (this.instance == null) {
      this.instance = axios.create({
        baseURL: BASE_URL,
      })
      axios.interceptors.request.use(function (config) {
        return config;
      })
      this.instance.interceptors.response.use(
        (response) => response,
        (error) => Promise.reject(error)
      )
    }

    return this.instance;
  }

  static async getUser() {
    return await MeliApiService.getInstance()
      .get(getUserUrl(), {
        ...BASE_CONFIG,
        method: 'get'
      })
      .then((response) => response.data)
      .catch(e => console.log(e));
  }

  static async getUserPurchases(userId: number, limit?: number, page?: number) {
    return await MeliApiService.getInstance()
      .get(getPurchasesUrl(userId, limit, page), {
        ...BASE_CONFIG,
        method: 'get',
      })
      .then((response) => response.data)
      .catch(e => console.log(e));;
  }
}

export default MeliApiService;