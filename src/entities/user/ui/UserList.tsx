import { UserCard } from './UserCard.tsx'
import { Weather } from '../../../features/weather/ui/Weather.tsx'
import { User } from '../types/user.ts'
import { useState } from 'react'
import { useSavedUsers } from '../model/useSavedUsers.ts'
import { MapPopup } from '../../../features/map/ui/MapPopup.tsx'

interface UserListProps {
  users: User[]
}

export const UserList = ({ users }: UserListProps) => {
  const { addUser } = useSavedUsers()
  const [selectedUser, setSelectedUser] = useState<User | null>()
  const [showWeather, setShowWeather] = useState(false)
  const [showMap, setShowMap] = useState(false)

  const handleSaveUser = (user: User) => {
    addUser(user)
  }

  const handleShowWeather = (user: User) => {
    setShowWeather(true)
    setSelectedUser(user)
  }
  const handleCloseWeather = () => {
    setShowWeather(false)
    setSelectedUser(null)
  }
  const handleShowMap = (user: User) => {
    setShowMap(true)
    setSelectedUser(user)
  }

  const handleCloseMap = () => {
    setShowMap(false)
    setSelectedUser(null)
  }

  if (!users || users.length === 0) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <p className="text-xl text-gray-600">
          There are no users on the list yet.
        </p>
      </div>
    )
  }

  return (
    <div className="flex items-center min-h-screen flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 py-4">
        {users.map((user) => (
          <UserCard
            key={user.login.uuid}
            user={user}
            onSave={handleSaveUser}
            onShowWeather={handleShowWeather}
            onShowMap={handleShowMap}
          />
        ))}
      </div>
      {showWeather && selectedUser && (
        <Weather user={selectedUser} onClose={handleCloseWeather} />
      )}
      {showMap && selectedUser && (
        <MapPopup
          latitude={Number(selectedUser.location.coordinates.latitude)}
          longitude={Number(selectedUser.location.coordinates.longitude)}
          onClose={handleCloseMap}
          userImage={selectedUser.picture.medium}
        />
      )}
    </div>
  )
}
