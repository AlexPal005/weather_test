import { UserList } from '../../../entities/user/ui/UserList.tsx'
import { useSavedUsers } from '../../../entities/user/model/useSavedUsers.ts'

export const SavedUsers = () => {
  const { savedUsers } = useSavedUsers()

  return <UserList users={savedUsers} />
}
