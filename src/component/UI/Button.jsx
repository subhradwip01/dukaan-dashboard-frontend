import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils'
const buttonVariant  = cva(
    'w-full rounded flex text-black-30 text-[16px] items-center',
    {
        variants:{
            variant:{
                outlined:"bg-black-100 border border-black-85"
            },
            size:{
                lg:"py-1.5 px-3.5 gap-[7px]",
                sm: "px-3 py-1.5 gap-3"
            }
        },
        defaultVariants:{
            variant:'outlined',
            size:"lg"
        }
    }
)
const Button = ({
    size,
    variant,
    className,
    trailingIcon,
    children,
    ...props
}) => {
  return (
    <button
        className={cn(buttonVariant({ variant, size, className }))}
        {...props}
      >
       <span>{children}</span>
        {trailingIcon && <img src={trailingIcon} alt='tariling-icon'/>}
      </button>
  )
}

export default Button