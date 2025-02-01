import { useGetWeatherByCoordinates } from '../../../entities/weather/api/weather.ts'
import { useEffect } from 'react'
import { User } from '../../../entities/user/types/user.ts'

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
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black opacity-40 z-60"
        onClick={onClose}
      ></div>
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-70"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Weather in Your Location
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Time:</span>
            <span className="text-gray-600">{weather.currentWeather.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Temperature:</span>
            <span className="text-gray-600">
              {weather.currentWeather.temperature}°C
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
          <div className="flex justify-between">
            <span className="font-bold text-gray-700">Weather Code:</span>
            <span className="text-gray-600">
              {weather.currentWeather.weatherCode}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
