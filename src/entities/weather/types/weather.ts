interface CurrentWeatherUnits {
  time: string
  interval: string
  temperature: string
  windSpeed: string
  windDirection: string
  isDay: string
  weatherCode: string
}

interface CurrentWeather {
  time: string
  interval: number
  temperature: number
  windSpeed: number
  windDirection: number
  isDay: number
  weatherCode: number
}

interface HourlyUnits {
  time: string
  temperature2m: string
}

interface Hourly {
  time: string[]
  temperature2m: number[]
}

interface DailyUnits {
  time: string
  temperature2mMax: string
  temperature2mMin: string
}

interface Daily {
  time: string[]
  temperature2mMax: number[]
  temperature2mMin: number[]
}

export interface WeatherData {
  latitude: number
  longitude: number
  generationTimeMs: number
  utcOffsetSeconds: number
  timezone: string
  timezoneAbbreviation: string
  elevation: number
  currentWeatherUnits: CurrentWeatherUnits
  currentWeather: CurrentWeather
  hourlyUnits: HourlyUnits
  hourly: Hourly
  dailyUnits: DailyUnits
  daily: Daily
}

export const weatherIcons: Record<number, string> = {
  0: '☀️',
  1: '🌤️',
  2: '⛅',
  3: '☁️',
  45: '🌫️',
  48: '🌫️',
  51: '🌦️',
  53: '🌦️',
  55: '🌦️',
  61: '🌧️',
  63: '🌧️',
  65: '🌧️',
  71: '❄️',
  73: '❄️',
  75: '❄️',
  80: '⛈️',
}

//convert json to WeatherData type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function convertWeatherData(jsonData: any): WeatherData {
  return {
    latitude: jsonData.latitude,
    longitude: jsonData.longitude,
    generationTimeMs: jsonData.generationtime_ms,
    utcOffsetSeconds: jsonData.utc_offset_seconds,
    timezone: jsonData.timezone,
    timezoneAbbreviation: jsonData.timezone_abbreviation,
    elevation: jsonData.elevation,
    currentWeatherUnits: {
      time: jsonData.current_weather_units.time,
      interval: jsonData.current_weather_units.interval,
      temperature: jsonData.current_weather_units.temperature,
      windSpeed: jsonData.current_weather_units.windspeed,
      windDirection: jsonData.current_weather_units.winddirection,
      isDay: jsonData.current_weather_units.is_day,
      weatherCode: jsonData.current_weather_units.weathercode,
    },
    currentWeather: {
      time: jsonData.current_weather.time,
      interval: jsonData.current_weather.interval,
      temperature: jsonData.current_weather.temperature,
      windSpeed: jsonData.current_weather.windspeed,
      windDirection: jsonData.current_weather.winddirection,
      isDay: jsonData.current_weather.is_day,
      weatherCode: jsonData.current_weather.weathercode,
    },
    hourlyUnits: {
      time: jsonData.hourly_units.time,
      temperature2m: jsonData.hourly_units.temperature_2m,
    },
    hourly: {
      time: jsonData.hourly.time,
      temperature2m: jsonData.hourly.temperature_2m,
    },
    dailyUnits: {
      time: jsonData.daily_units.time,
      temperature2mMax: jsonData.daily_units.temperature_2m_max,
      temperature2mMin: jsonData.daily_units.temperature_2m_min,
    },
    daily: {
      time: jsonData.daily.time,
      temperature2mMax: jsonData.daily.temperature_2m_max,
      temperature2mMin: jsonData.daily.temperature_2m_min,
    },
  }
}
