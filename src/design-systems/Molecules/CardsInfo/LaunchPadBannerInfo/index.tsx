import { LaunchPadBannerInfoProps } from './interface'

import Button from 'design-systems/Atoms/Button'
import { IconCheck } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const LaunchPadBannerInfo: React.FC<LaunchPadBannerInfoProps> = ({ className, type, description, name, creator }) => {
  return (
    <div className={`absolute bottom-0 flex w-full ${className} overflow-hidden`}>
      <div className="flex w-full flex-col items-end p-4 lmd:flex-row">
        <div className="flex w-full flex-col  text-neutral-800">
          <Typography className="text-start font-Poppins text-subtitle font-semibold leading-[39px] md:text-[30px]">
            {name}
          </Typography>
          <Typography className="text-start font-Poppins text-body font-medium leading-[145%]">
            By {creator}
            <IconCheck className="ml-3 inline-block" height={15} width={15} />
          </Typography>
          <div className="mt-3 flex h-8 w-full items-center justify-center rounded-xs border-none bg-[#e2e2e299] text-center backdrop-blur-[20px] sm:w-[300px]">
            <Typography
              className={`flex items-center justify-center text-center font-Poppins text-base font-semibold leading-[145%] ${
                type === 'Live' ? 'text-[#32C74A]' : 'text-neutral-800'
              }`}
            >
              {type}
            </Typography>
          </div>
          <Typography className="mt-2 w-full text-start font-Poppins text-md font-medium leading-[145%] lmd:w-[393px]">
            {description}
          </Typography>
        </div>
        <Button className="mt-3 hidden  h-4 w-full items-center justify-center rounded-xs border-none bg-[#e2e2e299] px-8 py-4 text-center font-Poppins text-base font-bold text-neutral-800 backdrop-blur-[20px] group-hover:bg-neutral-800 group-hover:text-neutral-100 smd:h-12 smd:rounded-sm lmd:mt-0 lmd:inline-flex lmd:h-12 lmd:w-[110px]">
          View
        </Button>
      </div>
    </div>
  )
}
export default LaunchPadBannerInfo
