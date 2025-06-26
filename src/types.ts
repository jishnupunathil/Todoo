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


export type Settings = {
  readonly id: string        // never changes
  theme: 'light' | 'dark' | 'kappii'   // optional: may be undefined
}

export type ApiState<T>={
  status:'loading'}|
  {status:'success';data:T}|
  {status: 'error'; message: string}

export type UploadState =
  | { step: 'idle' }
  | { step: 'uploading'; progress: number }   // 0-100
  | { step: 'done'; url: string };