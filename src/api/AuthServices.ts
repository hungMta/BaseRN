import {fetchData, MethodHTTP} from './ApiService'
import {SIGN_IN} from './ApiPath'

export async function SignIn(
  loginId: string,
  password: string,
): Promise<Boolean> {
  const promise = new Promise<Boolean>(async (resolve, reject) => {
    try {
      await fetchData(SIGN_IN, MethodHTTP.POST, {
        login_id: loginId,
        password: password,
        login_type: 1,
      })
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
  return promise
}
