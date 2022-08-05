/**
 * Created by zane on 2022/8/3 23:25
 * @description .
 */
import {Fetch, FetchResponse, Method} from './fetch'
import * as uri from "uri"
import {topDetail} from "uri";

const fetch = new Fetch({baseURL: 'https://api.quandouyao.com/netease'})

export function getTotList(): Promise<FetchResponse> {
  return fetch.send({
    url: uri.topList,
    method: Method.get
  })
}

export function getTopDetail(): Promise<FetchResponse> {
  return fetch.send({
    url: uri.topDetail,
    method: Method.get
  })
}

export function getBanner(type: number = 2): Promise<FetchResponse> {
  return fetch.send({
    url: uri.banner,
    method: Method.get,
    params: {
      type
    }
  })
}
