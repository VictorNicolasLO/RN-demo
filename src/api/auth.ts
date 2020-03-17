import {AxiosInstance} from 'axios';

export class Auth {
  constructor(private api: AxiosInstance) {}

  signIn = (username: string, password: string) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {username}});
      }, 1000);
    });
    /*return this.api.post('/sign-in', {
      username,
      password,
    });*/
  };
}
