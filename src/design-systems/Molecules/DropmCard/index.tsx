import { useCallback, useState } from 'react'

import { DropCardProps } from './interface'

import { DropDownIcon } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const DropCard: React.FC<DropCardProps> = ({ title, className, children }) => {
  const [isHover, setIsHover] = useState<boolean>(false)

  const handleHover = useCallback(() => {
    setIsHover(true)
  }, [])

  const handleLeaveHover = useCallback(() => {
    setIsHover(false)
  }, [])

  return (
    <div className="relative w-full">
      <div
        className={`gd-dropdown absolute z-10 block h-fit w-full items-start rounded-sm border-[0.5px] border-lightGray bg-white px-4 py-3 hover:bg-neutral-800 ${className}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
      >
        <div className="flex items-center justify-between gap-2">
          <Typography className="font-Poppins text-base font-semibold text-neutral-100">{title}</Typography>
          <DropDownIcon
            className={`transform ${isHover ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in`}
            height={8}
            width={16}
          />
        </div>
        <div className="gd-dropdown-arrow h-0 w-full opacity-0">
          <div className="h-full w-full overflow-hidden rounded-sm">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default DropCard
