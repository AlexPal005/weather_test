import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({ currentPage, onPageChange }: PaginationProps) => {
  const handlePageChange = (page: number) => {
    if (page > 0) {
      onPageChange(page)
    }
  }

  return (
    <div className="flex items-center justify-center mt-4 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-300 cursor-pointer hover:bg-blue-600"
      >
        <FaChevronLeft />
      </button>
      <span className="text-lg font-medium">Page {currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-600"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}
