import React, { useState } from 'react'

import Typography from '../Typography'

import { CheckboxProps } from './interface'
import { items } from './utils'

const Checkbox: React.FC<CheckboxProps> = ({ className, label, id, checked, onChange }) => {
  return (
    <div className={`${className} w-full`}>
      <label key={id} className={`flex cursor-pointer items-center ${checked ? 'text-black' : 'text-gray-600'}`}>
        <input
          type="checkbox"
          className="mr-2 h-[32px] w-[32px] cursor-pointer"
          onChange={onChange}
          checked={checked}
        />

        <Typography className="ml-2 font-Poppins text-base font-semibold text-black"> {label}</Typography>
      </label>
    </div>
  )
}

export default Checkbox
