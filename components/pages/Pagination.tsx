'use client'

import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className
}: PaginationProps) {
  return (
    <div className={cn("flex justify-center items-center gap-6", className)}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={currentPage === pageNumber ? "default" : "outline"}
          size="icon"
          className={cn(
            "h-10 w-10",
            currentPage === pageNumber && "bg-blue-600 hover:bg-blue-700",
            "transition-colors duration-200"
          )}
          onClick={() => onPageChange(pageNumber)}
          aria-label={`Page ${pageNumber}`}
          aria-current={currentPage === pageNumber ? "page" : undefined}
        >
          {pageNumber}
        </Button>
      ))}
      {currentPage < totalPages && (
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8"
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Next page"
        >
          <ChevronRight className="h-10 w-10" />
        </Button>
      )}
    </div>
  )
}

