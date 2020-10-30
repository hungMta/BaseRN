import { fetchData, MethodHTTP } from './ApiService';
import { SIGN_IN } from './ApiPath';

export function SignIn(loginId: string, password: string) => Promise<any> {
    await fetchData(SIGN_IN, MethodHTTP.POST, {login_id: loginId, password: password})
}