import { SpinnerPageLoadingProps } from './interface'

import Spinner from 'design-systems/Atoms/Spinner'

const SpinnerPageLoading: React.FC<SpinnerPageLoadingProps> = ({ className = '' }) => {
  return (
    <div className="mb-[103px] mt-[72px] flex h-[500px] items-center justify-center">
      <Spinner className={`animate-spin ${className}`} />
    </div>
  )
}

export default SpinnerPageLoading
