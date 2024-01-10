import * as React from "react"

import { cn } from "../../utils"

const Table = ({ className, ...props }) => (
  <div className="relative w-full overflow-x-auto">
    <table
      className={cn("w-full text-sm", className)}
      {...props}
    />
  </div>
)


const TableHeader = ({ className, ...props }) => (
  <thead className={cn("bg-black-95 rounded", className)} {...props} />
)


const TableBody = ({ className, ...props }) => (
  <tbody
    className={cn(className)}
    {...props}
  />
)

const TableRow = ({ className, ...props }) => (
  <tr
    className={cn(
      "border-b borer-black-30 rounded grid grid-cols-4",
      className
    )}
    {...props}
  />
)


const TableHead = ({ className, ...props }) => (
  <th
    className={cn(
      "text-left text-black-12 font-medium px-3 py-[10px]",
      className
    )}
    {...props}
  />
)


const TableCell = ({ className, ...props }) => (
  <td
    className={cn(
      "text-left text-black-12 text-[14px] px-3 py-[10px]",
      className
    )}
    {...props}
  />
)



export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
}
