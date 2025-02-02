import { useGetWeatherByCoordinates } from '../../../entities/weather/api/weather.ts'
import { useEffect } from 'react'
import { User } from '../../../entities/user/types/user.ts'
import { IoMdClose } from 'react-icons/io'
import { getWeatherIcon } from '../../../entities/weather/types/weather.ts'

interface WeatherProps {
  user: User
  onClose: () => void
}

export const Weather = ({ user, onClose }: WeatherProps) => {
  const { data: weather } = useGetWeatherByCoordinates(
    user.location.coordinates.latitude,
    user.location.coordinates.longitude
  )
  useEffect(() => {
    console.log(weather)
  }, [weather])

  if (!weather) return null

  return (
    <div className="fixed inset-0 z-50 w-full">
      <div
        className="absolute inset-0 bg-black opacity-40 z-60"
        onClick={onClose}
      ></div>
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-120 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-70"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="absolute top-2 right-2 hover:text-gray-800 cursor-pointer w-6 h-6"
          onClick={onClose}
        />

        <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
          {`Weather in ${user.location.city}, ${user.location.country}`}
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Time:</span>
            <span className="text-gray-600">
              {new Date(weather.currentWeather.time).toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Temperature:</span>
            <span className="text-gray-600">
              {weather.currentWeather.temperature}°C{' '}
              {getWeatherIcon(weather?.currentWeather.weatherCode)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Wind Speed:</span>
            <span className="text-gray-600">
              {weather.currentWeather.windSpeed} m/s
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Wind Direction:</span>
            <span className="text-gray-600">
              {weather.currentWeather.windDirection}°
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
