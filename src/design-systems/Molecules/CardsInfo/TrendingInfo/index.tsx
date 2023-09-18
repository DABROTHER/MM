import { TrendingInfoProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'
import { IconCheck } from 'design-systems/Atoms/Icons'

const TrendingInfo: React.FC<TrendingInfoProps> = ({ className, data, isInfoName = true, name }) => {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden px-4 pb-2.5 pt-[17px] ${className}`}>
      {isInfoName && (
        <div className="flex w-full gap-[35px]">
          <div className="flex flex-row gap-3 ">
            <Typography className="custom-truncate-width w-[99px] items-center justify-center overflow-hidden truncate text-ellipsis whitespace-nowrap text-left font-Poppins text-body font-bold leading-[16px] text-neutral-100 md:w-full">
              {name}
            </Typography>
            <IconCheck className="inline-block" height={15} width={19} />
          </div>
        </div>
      )}

      <div className="mt-[3px] flex w-full flex-row items-end text-start md:mt-[11px] xl:min-h-[37px]">
        {data.map((obj, i) => (
          <div className="flex flex-row gap-3 md:gap-8" key={i}>
            {Object.entries(obj).map(([key, value]) => (
              <div className="flex flex-col" key={i}>
                <Typography className="font-Poppins text-md font-bold leading-[145%] text-lightGray">{key} </Typography>
                <Typography className="font-Poppins text-body font-bold leading-[145%] text-neutral-100">
                  {value}
                </Typography>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default TrendingInfo
