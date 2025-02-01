import { User } from '../types/user.ts'
import useLocalStorage from 'use-local-storage'

export const useSavedUsers = () => {
  const [savedUsers, setSavedUsers] = useLocalStorage<User[]>('savedUsers', [])

  const addUser = (user: User) => {
    if (!savedUsers.some((savedUser) => savedUser.id === user.id)) {
      setSavedUsers([...savedUsers, user])
    }
  }

  const removeUser = (selectedUser: User) => {
    setSavedUsers(
      savedUsers.filter((user) => user.id.value !== selectedUser.id.value)
    )
  }

  const isUserSaved = (selectedUser: User) => {
    return savedUsers.some((user) => user.id.value === selectedUser.id.value)
  }

  return {
    savedUsers,
    addUser,
    removeUser,
    isUserSaved,
  }
}
