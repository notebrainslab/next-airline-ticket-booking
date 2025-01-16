'use client'

import { useState } from 'react'
import Pagination from './Pagination'

export default function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 4 // Example with 4 pages

  return (
    <div className="p-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

