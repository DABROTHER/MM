import Typography from 'design-systems/Atoms/Typography'
import { MintCardInfoProps } from './interface'

const MintCardInfo: React.FC<MintCardInfoProps> = ({ className }) => {
  return (
    <div className={`flex w-full flex-col text-left ${className}`}>
      <Typography className="mb-1 font-Poppins text-base font-bold text-black">Welcome to collection one</Typography>
      <Typography className="font-Poppins text-md font-normal text-black">
        Lorem ipsum dolor sit amet consectetur. Consectetur pulvinar quis vitae ac. Non praesent velit habitasse arcu
        elementum scelerisque non purus sollicitudin. At amet tellus porta gravida dolor facilisi gravida varius. Erat
        pharetra blandit ultrices nunc cursus dignissim.{' '}
      </Typography>
    </div>
  )
}
export default MintCardInfo
