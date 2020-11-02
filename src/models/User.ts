import {AccountType} from '../utils/Constant'
export class User {
  login_type: AccountType
  login_id: number
  usr_bko: string

  constructor(json: any) {
    this.login_type = json.login_type
    this.login_id = json.login_id
    this.usr_bko = json.usr_bko
  }
}
