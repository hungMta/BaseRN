import AsyncStorage from '@react-native-community/async-storage'
import {Constant} from './Constant'

export async function saveToken(string: string) {
  await AsyncStorage.setItem(Constant.TOKEN, string)
}

export async function deleteToken() {
  await AsyncStorage.removeItem(Constant.TOKEN)
}

export async function getToken(): Promise<string | null> {
  const token = await AsyncStorage.getItem(Constant.TOKEN)
  return token
}
