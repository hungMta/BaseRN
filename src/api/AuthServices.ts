import {fetchData, MethodHTTP} from './ApiService'
import {SIGN_IN} from './ApiPath'
import {saveToken} from '../utils/DataUtil'

export async function SignIn(
  loginId: string,
  password: string,
): Promise<Boolean> {
  const promise = new Promise<Boolean>(async (resolve, reject) => {
    try {
      const reponse = await fetchData(SIGN_IN, MethodHTTP.POST, {
        login_id: loginId,
        password: password,
        login_type: 1,
      })
      await saveToken(reponse.data.data.original.access_token)
      resolve(true)
    } catch (error) {
      console.log(error)
      console.log(error.response)
      reject(error)
    }
  })
  return promise
}
