import { IconButtonProps } from './interface'
import { notificationCardCSS } from './utils'

const IconButton: React.FC<IconButtonProps> = ({ className, children, onClick }) => {
  return (
    <div className={`${className} ${notificationCardCSS}`} onClick={onClick}>
      {children}
    </div>
  )
}
export default IconButton
