import {axios} from "../utils/request";

const API = import.meta.env.VITE_NEST_API
console.log(API,'API')
export class ActivityService {
  static async findActivityByConditions(params:any):Promise<any>{
    return axios.post(API + '/findActivityByConditions', params)
  }
  static async findActivityById(params:any):Promise<any>{
    return axios.get(API + `/api/v1/activities/${params.activityId}`, params)
  }
  static async listActivities(params:any):Promise<any>{
    return axios.get(API + '/api/v1/activities', {params:params})
  }
  static async updateAnActivity(params:any):Promise<any>{
    return axios.post(API + `/api/v1/activities/${params.activityId}/update`, params)
  }

  static async createAnActivity(params:any):Promise<any>{
    return axios.post(API + `/api/v1/activities/create`, params)
  }

  static async removeAnActivity(params:any):Promise<any>{
    return axios.delete(API + `/api/v1/activities/${params.activityId}/`, params)
  }


  static async joinAnActivity(params: any):Promise<any>{
    return axios.post(API + `/api/v1/activities/join`, params)
  }
// {{activity-api}}/activities/join
}


// export const findActivityByConditions = (params: any) => {
//   return axios.post(API + '/findActivityByConditions', params)
// }
