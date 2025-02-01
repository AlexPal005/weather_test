import { User } from '../../../entities/user/types/user.ts'

interface UserCardProps {
  user: User
  onSave: (user: User) => void
  onShowWeather: (user: User) => void
}

export const UserCard = ({ user, onSave, onShowWeather }: UserCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-full sm:w-68 md:w-60 lg:w-61 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <img
          src={user.picture.large}
          alt={user.name.first}
          className="rounded-full w-20 h-20"
        />
        <h2 className="text-lg font-semibold mt-2 text-center">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-600 text-center">{user.gender}</p>
        <p className="text-gray-500 text-center">
          {user.location.city}, {user.location.country}
        </p>
        <p className="text-blue-500 underline text-center">{user.email}</p>
      </div>
      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        <button
          onClick={() => onSave(user)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Save
        </button>
        <button
          onClick={() => onShowWeather(user)}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
        >
          Weather
        </button>
      </div>
    </div>
  )
}
