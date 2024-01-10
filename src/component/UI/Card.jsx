import React from 'react'
import { cn } from '../../utils'
const Card = ({
    className,
    children,
    ...props
}) => {
  return (
    <div className={cn('p-5 rounded-lg shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] flex flex-col gap-4',className)} {...props}>
        {children}
    </div>
  )
}

const CardTitle = ({ className,children, ...props }) => {
  return <h3
    className={cn("text-[16px] text-black-30", className)}
    {...props}
  >{children}</h3>
}

const CardContent = ({className,children,...props}) => {
    return (
       <div className={cn('text-black-12',className)} {...props}>
            {children}
       </div> 
    )
}

export {
    Card,
    CardTitle,
    CardContent
}