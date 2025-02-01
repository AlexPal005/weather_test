import { WeatherData } from '../types/weather.ts'
import axios from 'axios'

const getWeatherByCoordinates = (): Promise<WeatherData> => {
  const response = axios.get()
  return response.data
}
