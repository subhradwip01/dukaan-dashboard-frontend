import { cn } from "../../utils"
import { leftArrowIcon, rightArrowIcon } from "../../assets/icon"
import Button, { buttonVariant } from "./Button"
 
const Pagination = ({ className, ...props }) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
)
 
const PaginationContent =({ className, ...props }) => (
  <ul
    className={cn("flex flex-row items-center gap-2", className)}
    {...props}
  />
)
 
const PaginationItem = ({ isActive,className, ...props }) => (
  <li className={cn(`cursor-pointer py-1 px-2.5 hover:bg-primary hover:text-black-100 rounded text-black-30 ${isActive && 'bg-primary text-black-100'}`, className)} {...props} />
)

 
const PaginationPrevious = ({
  className,
  ...props
}) => (
    <Button variant={'outlined'} size={'lg'} leadingIcon={leftArrowIcon} cla>Previous</Button>
)

 
const PaginationNext = ({
  className,
  ...props
}) => (
  <Button variant={'outlined'} size={'lg'} trailingIcon={rightArrowIcon}>Next</Button>
)
 
const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    ...
    <span className="sr-only">More pages</span>
  </span>
)
 
export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}