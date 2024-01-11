"use client"
import { Eye, EyeSlash } from 'phosphor-react'
import React, { InputHTMLAttributes, useState } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  name?: string
  label?: string
  disabled?: boolean
  error?: React.ReactNode
}

export function Input({
  type,
  name,
  value,
  label,
  disabled,
  error = '',
  onChange,
  onBlur,
}: InputProps) {
  const [internalValue, setInternalValue] = useState('')
  const [passwordIsVisible, setPasswordIsVisible] = useState('eyeClosed')
  const [typeInput, setTypeInput] = useState(type)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInternalValue(event.target.value)
    if (onChange) onChange(event)
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    if (onBlur) onBlur(event)
  }

  function handleTogglePassword() {
    if (typeInput === 'password') {
      setPasswordIsVisible('eyeOpen')
      setTypeInput('text')
    } else {
      setPasswordIsVisible('eyeClosed')
      setTypeInput('password')
    }
  }

  return (
    <>
      <label
        htmlFor={`${name}-input`}
        className='text-sm mb-1'
      >
        {label}
      </label>
      <div></div>
      <input
        id={`${name}-input`}
        name={name}
        className='w-full pt-5 pb-5 pr-2 pl-2 h-8 bg-gray-100 text-gray-500 text-sm rounded-md border-none'
        type={typeInput}
        value={value !== undefined ? value : internalValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {type === 'teste' && (
        <span
          id='icon-eye-password' 
          className='cursor-pointer absolute left-3/4 items-center justify-end mt-[36px]' 
          onClick={handleTogglePassword}
        >
          {passwordIsVisible === 'eyeOpen' ? <Eye size={16} weight="regular" color='#455360'/> : <EyeSlash size={16} weight="regular" color='#455360'/>}
        </span>
      )}
      {error && 
      <p 
        id='error-message'
        className='absolute mt-[70px] text-xs items-center font-normal text-red-500'
      >
      {error}
      </p>}
    </>
  )
}