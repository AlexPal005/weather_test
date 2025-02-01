import { convertWeatherData, WeatherData } from '../types/weather.ts'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const weatherApiUrl = import.meta.env.VITE_WEATHER_API_URL
const getWeatherByCoordinates = async (
  latitude: string,
  longitude: string
): Promise<WeatherData> => {
  const response = await axios.get(`${weatherApiUrl}/forecast`, {
    params: {
      latitude: latitude,
      longitude: longitude,
      current_weather: 1,
      hourly: 'temperature_2m',
      daily: 'temperature_2m_max,temperature_2m_min',
    },
  })
  return convertWeatherData(response.data)
}

export const useGetWeatherByCoordinates = (
  latitude: string,
  longitude: string
) => {
  return useQuery({
    queryKey: ['getWeatherByCoordinates', latitude, longitude],
    queryFn: () => getWeatherByCoordinates(latitude, longitude),
    staleTime: 1000 * 5 * 60,
  })
}
