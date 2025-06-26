import type { AdminUser, User } from "./types";

export const users:User[]=[
    { id: 1, name: 'Jishnu',  email: 'jishnu@example.com',  isAdmin: true  },
  { id: 2, name: 'Arya',    email: 'arya@example.com',    isAdmin: false },
  {id:3,  name: 'Rahul',   email: 'rahul@example.com',   isAdmin: false }
]

type AnyUser = User | AdminUser


export const userse: AnyUser[] = [
  {
    id: 1,
    name: 'Jishnu',
    email: 'jishnu@mail.com',
    isAdmin: true,
    permissions: ['ban-users', 'access-reports'] // 👈 AdminUser
  },
  {
    id: 2,
    name: 'Arya',
    email: 'arya@mail.com',
    isAdmin: false
  },
  {
    id: 3,
    name: 'Rahul',
    email: 'rahul@mail.com',
    isAdmin: false
  }
]