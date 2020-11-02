import Config from 'react-native-config'
import {getToken} from '../utils/DataUtil'
const axios = require('axios')

export enum MethodHTTP {
  POST = 'post',
  GET = 'get',
  DELETE = 'delete',
  PUT = 'put',
}

export async function fetchData(
  path: string,
  method: MethodHTTP,
  body: any,
): Promise<any> {
  let apiURL = Config.API_URL + path
  console.log(apiURL, body, method)
  let headers = await getHeader()
  const request = axios({
    headers,
    method: method,
    url: apiURL,
    data: body,
  })
  return request
}

async function getHeader(): Promise<any> {
  var header: any = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const token = await getToken()
  if (token !== null) {
    header.Authorization = 'Bearer' + token
  }
  return header
}
