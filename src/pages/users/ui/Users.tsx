import { UserList } from '../../../entities/user/ui/UserList.tsx'
import { Spinner } from '../../../features/spinner/ui/Sprinner.tsx'
import { ErrorMessage } from '../../../features/error/ui/ErrorMessage.tsx'
import { Pagination } from '../../../features/pagination/ui/Pagination.tsx'
import { useState } from 'react'
import { useGetUsers } from '../../../entities/user/api/user.ts'

const COUNT_USERS_ON_PAGE = 12

export const Users = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {
    data: users,
    isLoading,
    error,
  } = useGetUsers(COUNT_USERS_ON_PAGE, currentPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ErrorMessage message="Something went wrong! Please try again." />
      </div>
    )
  }
  return (
    <div className="w-full pb-10">
      <UserList users={users || []} />
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  )
}
