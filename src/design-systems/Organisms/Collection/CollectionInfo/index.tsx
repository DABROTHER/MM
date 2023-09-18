import { CollectionInfoProps } from './interface'

import { IconCheck } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import { formatAddress } from 'utils'

const CollectionInfo: React.FC<CollectionInfoProps> = ({ data, description, name, creator }) => {
  return (
    <>
      <div className="mt-2 flex flex-col">
        <Typography className="text-start font-Poppins text-[30px] font-semibold leading-[35.5px]">
          {name}
          <IconCheck className="ml-3 inline-block" height={15} width={15} />
        </Typography>
        <Typography className="leading-[20.3px ] text-start font-Poppins text-md font-semibold">
          By <Typography className="ml-1 inline-block text-[#DB417D]">{formatAddress(creator)}</Typography>
        </Typography>
        <Typography className="mt-[3px] w-full text-start font-Poppins text-md font-medium leading-[22.3px] lmd:w-[554px]">
          {description}
        </Typography>
      </div>
      <div className="mt-[2px] flex flex-row">
        <div className="flex w-full flex-row items-end text-start xl:min-h-[37px]">
          {data.map((obj, i) => (
            <div className={`  grid grid-cols-3 gap-1 md:flex md:flex-row md:gap-4`} key={i}>
              {Object.entries(obj).map(([key, value]) => (
                <div className="flex flex-col" key={i}>
                  <Typography className="font-Poppins text-md font-bold leading-[20.3px] text-lightGray">
                    {key}
                  </Typography>
                  <Typography className="font-Poppins text-body font-bold leading-[20.3px] text-neutral-100">
                    {value}
                  </Typography>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default CollectionInfo
