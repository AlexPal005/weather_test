import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { User } from '../types/user.ts'

const getUsers = async (count: number): Promise<User[]> => {
  const response = await axios.get('https://randomuser.me/api/', {
    params: { results: count },
  })
  return response.data.results
}

export const useGetUsers = (count: number) => {
  return useQuery({
    queryKey: ['getRandomUser'],
    queryFn: () => getUsers(count),
  })
}
