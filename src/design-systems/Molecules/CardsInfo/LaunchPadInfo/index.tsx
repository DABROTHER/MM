import { LaunchPadInfoProps } from './interface'

import { IconCheck, IconLiked, IconLikeFill } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const LaunchPadInfo: React.FC<LaunchPadInfoProps> = ({ type, className, name, isLiked, likeCount }) => {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden px-4 pb-4 pt-[19px] ${className}`}>
      <div className="flex w-full flex-row justify-between gap-[35px]">
        <div className="flex flex-row gap-3">
          <Typography className="flex items-center justify-center font-Poppins text-body font-bold leading-[16px] text-neutral-100">
            <p className="custom-truncate-width truncate">{name}</p>
            <IconCheck className="ml-3 inline-block" height={15} width={15} />
          </Typography>
        </div>
        <div className="flex flex-row items-center gap-3">
          {isLiked ? (
            <IconLikeFill className="-mt-1 items-center" height={15} width={16} />
          ) : (
            <IconLiked className="-mt-1 items-center" height={15} width={16} />
          )}
          <Typography className="items-center font-Poppins text-md font-semibold leading-[109.5%] text-neutral-100">
            {likeCount}
          </Typography>
        </div>
      </div>
      <div className="mt-[15px] flex h-8 w-full items-center justify-center rounded-xs border-[1px] border-solid border-xlightGray bg-xlightGray text-center">
        <Typography
          className={`flex items-center justify-center p-1 text-center font-Poppins text-base font-semibold leading-[145%] ${
            type === 'Live' ? 'alert-dot relative animate-flashing rounded-full text-[#32C74A]' : 'text-lightGray'
          }`}
        >
          {type}
        </Typography>
      </div>
    </div>
  )
}
export default LaunchPadInfo
