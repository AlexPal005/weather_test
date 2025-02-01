import { User } from '../types/user.ts'
import { useSavedUsers } from '../model/useSavedUsers.ts'
import { useGetWeatherByCoordinates } from '../../weather/api/weather.ts'
import { useEffect } from 'react'
import { weatherIcons } from '../../weather/types/weather.ts'

const getWeatherIcon = (code: number): string => {
  return weatherIcons[code] ?? '❓'
}

interface UserCardProps {
  user: User
  onSave: (user: User) => void
  onShowWeather: (user: User) => void
}

export const UserCard = ({ user, onSave, onShowWeather }: UserCardProps) => {
  const { isUserSaved, removeUser } = useSavedUsers()
  const { data: weather } = useGetWeatherByCoordinates(
    user.location.coordinates.latitude,
    user.location.coordinates.longitude
  )

  useEffect(() => {
    console.log(weather)
  }, [weather])

  const minTemperature = () => {
    if (weather?.daily?.time && weather.daily.temperature2mMin) {
      const today = new Date().toISOString().split('T')[0]
      const index = weather.daily.time.indexOf(today)

      if (index !== -1) {
        return weather.daily.temperature2mMin[index]
      }
    }
    return null
  }

  const maxTemperature = () => {
    if (weather?.daily?.time && weather.daily.temperature2mMax) {
      const today = new Date().toISOString().split('T')[0]
      const index = weather.daily.time.indexOf(today)

      if (index !== -1) {
        return weather.daily.temperature2mMax[index]
      }
    }
    return null
  }

  return (
    <div className="bg-white h-95 border border-gray-200 p-4 rounded-lg shadow-lg w-full sm:w-68 md:w-61 lg:w-61 flex flex-col items-center justify-between">
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
        <div className="flex justify-between items-center mt-3 gap-3">
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Min</span>
            <span className="text-blue-600 font-semibold">
              {minTemperature()}°C
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Current</span>
            <span className="text-gray-800 font-semibold">
              {weather?.currentWeather.temperature}°C
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Max</span>
            <span className="text-red-600 font-semibold">
              {maxTemperature()}°C
            </span>
          </div>
          {weather?.currentWeather.weatherCode !== undefined && (
            <p className="mt-2">
              {getWeatherIcon(weather?.currentWeather.weatherCode)}
            </p>
          )}
        </div>
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
