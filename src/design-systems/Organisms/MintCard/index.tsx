import { MintItemCardProps } from './interface'
const MintCard: React.FC<MintItemCardProps> = ({ children, className }) => {
  return <div className={`rounded-[18px] border border-solid border-lightGray ${className}`}>{children}</div>
}
export default MintCard
