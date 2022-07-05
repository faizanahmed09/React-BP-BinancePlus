/* --- STATE --- */
export interface User{
  uuid: string |null,
  userName: string |null,
  fullName: string |null,
  email: string |null,
  country: string |null,
  phoneNumber: string |null,
  referralLink: string |null,
  apiKey: string |null
  apiSecret: string |null,
  planIsActive: boolean,
  emailConfirmed: boolean,
  refereeUuid: string |null,
}

export interface AuthState {
  accessToken:string | null,
  user: User | null,
  loading:boolean,
  customeError:string | null,
}