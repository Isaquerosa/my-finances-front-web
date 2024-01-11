"use client"


import { Circle } from 'phosphor-react'
import { HTMLAttributes } from 'react'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'link'
  text?: string
  name?: string
  disabled?: boolean
  isLoading?: boolean
  type?: 'submit' | 'reset' | 'button'
  onClick?: (params: any) => any
}

export function Button({
  as = 'button',
  name,
  text,
  isLoading,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <button
      id={`${name}-button`}
      name={name}
      className='w-full h-12 flex items-center justify-center cursor-pointer rounded-md bg-blue-500'
      onClick={onClick}
      {...props}
    >
      {isLoading ? 
      <>
        <div className="py-2 w-full ">
          <div className="animate-pulse flex space-x-4 items-center justify-center">
            <Circle size={36} color="#fff" weight="bold" className='animate-spin' />
          </div>
        </div>
      </> : text}
    </button>
  )
}
