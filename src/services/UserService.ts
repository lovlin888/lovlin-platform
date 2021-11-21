import {axios} from "../utils/request";

const API = import.meta.env.VITE_NEST_API
console.log(API,'API')
export class UserService {
  static async login(params:any):Promise<any>{
    return axios.post(API + '/auth/login', params);
  }
}
