import { HomeTopCardInfoProps } from './interface'

import { IconCheck } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'

const HomeTopCardInfo: React.FC<HomeTopCardInfoProps> = ({ name, className, floorPrice }) => {
  return (
    <div className={`absolute bottom-3 left-4 z-10 flex flex-col ${className}`}>
      <div className="flex items-center gap-2">
        <Typography className="custom-truncate-width truncate !font-Poppins text-base font-semibold leading-[145%] text-neutral-700">
          {name}
        </Typography>
        <IconCheck />
      </div>
      <div className="flex">
        <Typography className="font-Poppins text-md font-medium leading-[145%] text-neutral-700">
          Floor {floorPrice} ETH
        </Typography>
      </div>
    </div>
  )
}
export default HomeTopCardInfo
