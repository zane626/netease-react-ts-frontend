/**
 * Created by zane on 2022/8/3 23:26
 * @description .
 */
import axios from 'axios'
import _ from 'lodash'

export enum Method {
  get = 'get',
  post = 'post',
  put = 'put',
  del = 'delete'
}

export interface SendOptions {
  timeout?: number;
  params?: any;
  data?: any;
  method: Method;

  [propName: string]: any;
}

export interface FetchResponse {
  code?: number;
  result?: object | Array<any> | null;
  [propName: string]: any;
}

export class Fetch {
  baseURL: string;

  constructor(options: { baseURL: string }) {
    this.baseURL = options.baseURL
  }

  send(options: SendOptions, customHeader: Record<string, string> = {}): Promise<FetchResponse> {
    return new Promise((resolve, reject) => {
      let headers: Record<string, string> = {};
      let sendData = _.cloneDeep(options);
      if (_.isArray(sendData.url)) sendData.url = sendData.url.join('/').replace(/\/\//g, '/');

      const instance = axios.create({
        baseURL: this.baseURL,
        timeout: options.timeout || 20000,
        headers: _.merge(headers, customHeader)
      })
      instance(sendData).then((res: any) => {
        const data = res.data as FetchResponse
        if (data.code === 200) {
          resolve(data)
        } else {
          reject(data)
        }
      })
    })
  }
}
