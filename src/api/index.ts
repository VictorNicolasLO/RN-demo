import Axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Auth} from './auth';

export class Api {
  axios: AxiosInstance;
  auth: Auth;
  constructor(options: AxiosRequestConfig) {
    this.axios = Axios.create({
      baseURL: 'http://0.0.0.0:3200',
      ...options,
    });
    this.auth = new Auth(this.axios);
  }
}
