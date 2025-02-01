import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { User } from '../types/user.ts'

const userApiUrl = import.meta.env.VITE_USER_API_URL

const getUsers = async (count: number, page: number): Promise<User[]> => {
  const response = await axios.get(userApiUrl, {
    params: { results: count, page: page },
  })
  return response.data.results
}

export const useGetUsers = (count: number, page: number) => {
  return useQuery({
    queryKey: ['getRandomUsers', page],
    queryFn: () => getUsers(count, page),
    staleTime: 60 * 1000, // 1 min
    refetchInterval: 5 * 60 * 1000, //5 min
  })
}
