import { SkeletonProps } from './interface'

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`flex h-full w-full animate-pulse items-center justify-center  bg-skeLightGray ${className}`}
      role="status"
    />
  )
}
export default Skeleton
