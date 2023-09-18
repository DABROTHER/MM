import { CircleIcon } from '../Icons'

import { SpinnerProps } from './interface'

const Spinner: React.FC<SpinnerProps> = ({ className = '' }) => {
  return <CircleIcon className={`animate-spin ${className}`} />
}

export default Spinner
