import { WeatherData } from '../../../entities/weather/types/weather.ts'

interface HourlyWeatherProps {
  weather: WeatherData
}

export const HourlyWeather = ({ weather }: HourlyWeatherProps) => {
  const { time, temperature2m } = weather.hourly
  const currentDate = new Date().toISOString().slice(0, 10)

  const todayData = time
    .filter((t, i) => t.startsWith(currentDate) && i % 4 === 0)
    .map((t, i) => ({
      time: t.slice(11, 16),
      temperature: temperature2m[i],
    }))

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm table-auto">
        <thead>
          <tr>
            {todayData.map((data, i) => (
              <th key={i} className="space-x-1 py-1 font-medium text-blue-600">
                {data.time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {todayData.map((data, i) => (
              <td key={i} className="px-2 py-1 text-center">
                {data.temperature}°C
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
