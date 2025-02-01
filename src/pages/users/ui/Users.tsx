import { useGetUsers } from '../../../entities/user/api/user.ts'
import { useEffect, useState } from 'react'
import { User } from '../../../entities/user/types/user.ts'
import { UserCard } from './UserCard.tsx'

export const Users = () => {
  const { data: users } = useGetUsers(10)
  const [savedUsers, setSavedUsers] = useState<User[]>([])

  useEffect(() => {
    const storedUsers = localStorage.getItem('savedUsers')
    if (storedUsers) {
      setSavedUsers(JSON.parse(storedUsers))
    }
  }, [])

  const handleSaveUser = (user: User) => {
    const updatedUsers = [...savedUsers, user]
    setSavedUsers(updatedUsers)
    localStorage.setItem('savedUsers', JSON.stringify(updatedUsers))
  }

  const handleShowWeather = (user: User) => {
    console.log('Show weather for:', user.location.city)
  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
        {users?.map((user) => (
          <UserCard
            key={user.login.uuid}
            user={user}
            onSave={handleSaveUser}
            onShowWeather={handleShowWeather}
          />
        ))}
      </div>
    </div>
  )
}
