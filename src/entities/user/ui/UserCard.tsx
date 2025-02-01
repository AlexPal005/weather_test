import { User } from '../types/user.ts'
import { useSavedUsers } from '../model/useSavedUsers.ts'

interface UserCardProps {
  user: User
  onSave: (user: User) => void
  onShowWeather: (user: User) => void
}

export const UserCard = ({ user, onSave, onShowWeather }: UserCardProps) => {
  const { isUserSaved, removeUser } = useSavedUsers()
  return (
    <div className="bg-white h-85 border border-gray-200 p-4 rounded-lg shadow-lg w-full sm:w-68 md:w-61 lg:w-61 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="rounded-full w-24 h-24 object-cover"
        />
        <h2 className="text-xl font-semibold mt-4 text-gray-800">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-sm text-gray-500 mt-1">{user.gender}</p>
        <p className="text-base text-gray-600 mt-2">
          {user.location.city}, {user.location.country}
        </p>
        <p className="text-blue-600 mt-1 text-sm">{user.email}</p>
      </div>
      <div className="flex gap-3 mt-4 flex-wrap justify-center">
        {isUserSaved(user) ? (
          <button
            onClick={() => removeUser(user)}
            className="cursor-pointer bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300"
          >
            Delete
          </button>
        ) : (
          <button
            onClick={() => onSave(user)}
            className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300"
          >
            Save
          </button>
        )}
        <button
          onClick={() => onShowWeather(user)}
          className="cursor-pointer bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md shadow-md transition-all duration-300"
        >
          Weather
        </button>
      </div>
    </div>
  )
}
