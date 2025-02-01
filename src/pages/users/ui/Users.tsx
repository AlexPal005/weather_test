import { useGetUsers } from '../../../entities/user/api/user.ts'
import { UserList } from '../../../entities/user/ui/UserList.tsx'

export const Users = () => {
  const { data: users } = useGetUsers(10)

  return <UserList users={users || []} />
}
