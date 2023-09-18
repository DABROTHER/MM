import { useState } from 'react'

import Typography from '../Typography'

import { ToggleProps } from './interface'
import { toggleContaineClass, toggleClass } from './utils'

const Toggle: React.FC<ToggleProps> = ({ defaultCheck = false }) => {
  const [toggled, setToggled] = useState<boolean>(defaultCheck)

  return (
    <div className="flex h-12 w-[128px] items-center justify-center overflow-hidden rounded-2xl border-[0.75px] border-solid border-[#9a9a9a]">
      <div className="relative flex items-center pb-[0.5px]">
        <div
          className="gradient-text absolute h-[39px] w-[59px] rounded-2xl"
          style={{
            transform: `translateX(${toggled ? 0 : 60}px)`,
          }}
        />

        <div
          className="relative flex min-w-[120px] select-none items-center justify-between"
          onClick={() => setToggled((prevState: boolean) => !prevState)}
        >
          <div className={toggleContaineClass}>
            <Typography className={`${toggleClass} ${toggled ? 'font-medium text-white' : 'font-normal text-gray'}`}>
              Yes
            </Typography>
          </div>
          <div className={toggleContaineClass}>
            <Typography className={`${toggleClass} ${!toggled ? 'font-medium text-white' : 'font-normal text-gray'}`}>
              No
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Toggle
