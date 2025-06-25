export type User = {
  id: number
  name: string
  email: string
  isAdmin: boolean
}


export interface UserProfile {
  id: number
  name: string
  email: string
  isAdmin: boolean
}

export interface AdminUser extends User{
    permissions:string[]
}