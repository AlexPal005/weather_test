import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { User } from '../types/user.ts'

const userApiUrl = import.meta.env.VITE_USER_API_URL

const getUsers = async (count: number): Promise<User[]> => {
  const response = await axios.get(userApiUrl, {
    params: { results: count },
  })
  return response.data.results
}

export const useGetUsers = (count: number) => {
  return useQuery({
    queryKey: ['getRandomUsers'],
    queryFn: () => getUsers(count),
    staleTime: 1 * 60 * 1000, // 1 min
  })
}
