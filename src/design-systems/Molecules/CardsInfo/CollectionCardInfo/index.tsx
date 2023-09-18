import { CollectionCardInfoProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const CollectionCardInfo: React.FC<CollectionCardInfoProps> = ({ className, data, name, cardInfoMT }) => {
  return (
    <div className={`flex h-full w-full flex-col overflow-hidden px-4 pb-2.5 pt-[17px] ${className}`}>
      <div className="flex w-full flex-col">
        <Typography className="text-start font-Poppins text-body font-bold leading-[23.2px]">{name}</Typography>
      </div>
      <div className={`${cardInfoMT} flex w-full flex-row items-end text-start xl:min-h-[37px]`}>
        {data.map((obj, i) => (
          <div className="flex flex-row gap-3" key={i}>
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
export default CollectionCardInfo
