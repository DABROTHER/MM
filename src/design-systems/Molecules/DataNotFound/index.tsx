import Typography from 'design-systems/Atoms/Typography'
import { TypographyRobotCondensedSize, TypographyRobotSize } from 'design-systems/Atoms/Typography/interface'
interface DataNotFoundProps {
  text: string
  className?: string
  size?: TypographyRobotCondensedSize | TypographyRobotSize
}
const DataNotFound: React.FC<DataNotFoundProps> = ({ text, className, size }) => {
  return (
    <Typography className={`${className} flex w-full justify-center`} size={size}>
      {text}
    </Typography>
  )
}
export default DataNotFound
