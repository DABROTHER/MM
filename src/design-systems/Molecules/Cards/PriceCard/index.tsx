import ReactSlider from 'react-slider'
import { useState } from 'react'

import { PriceCardProps } from './interface'

import Button from 'design-systems/Atoms/Button'
import Typography from 'design-systems/Atoms/Typography'
import { convertCurrencyFormate } from 'utils'
const PriceCard: React.FC<PriceCardProps> = ({ className, onChangePrice }) => {
  const [price, setPrice] = useState<number[]>([1, 100])
  return (
    <div className={`${className} transition-all duration-200 ease-in group-hover:pt-3 group-hover:ease-out`}>
      <Typography className="mt-[6px] text-start font-Poppins text-md font-medium leading-[20.3px]">
        ${convertCurrencyFormate(price[0])} - ${convertCurrencyFormate(price[1])} USD
      </Typography>
      <div className="mt-[3px] flex flex-row justify-between">
        <Typography className="font-Poppins text-md font-medium leading-[23.5px] text-[#454545]">Min</Typography>
        <Typography className="font-Poppins text-md font-medium leading-[23.5px] text-[#454545]">Max</Typography>
      </div>
      <div className="mt-3 flex">
        <ReactSlider
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={state => `Thumb value ${state.valueNow}`}
          className="flex h-[2px] w-[230px] items-center justify-center bg-lightGray"
          defaultValue={price}
          minDistance={10}
          pearling
          thumbClassName="bg-neutral-100 border-[2px] border-neutral-100 h-3 w-1 rounded-full cursor-pointer"
          trackClassName="example-track"
          onChange={value => setPrice(value)}
        />
      </div>
      <Button
        className="mt-[19px] flex w-full bg-neutral-100 text-center font-Poppins text-base font-semibold leading-[23.2px] text-neutral-800"
        onClick={() => onChangePrice(price)}
      >
        Apply
      </Button>
    </div>
  )
}
export default PriceCard
