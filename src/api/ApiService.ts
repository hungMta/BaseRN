import Config from 'react-native-config'

export enum MethodHTTP {
  POST,
  GET,
  DELETE,
  PUT,
}

export async function fetchData(
  path: string,
  method: MethodHTTP,
  body: any,
): Promise<Response> {
  let apiURL = Config.API_URL + path
  const result = await fetch(apiURL, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: method.toString(),
    body: body,
  })
  return result
}
