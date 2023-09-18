import Card from '../Card'

import { GalleryCardProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const GalleryCard: React.FC<GalleryCardProps> = ({ src, className = '' }) => {
  return (
    <div
      className={`flex h-[328px] w-full cursor-pointer flex-col rounded-sm border-[#9a9a9a] bg-neutral-800 md:h-[336px] xl:w-[332px] ${className}`}
    >
      <div className="knowledge-gallery-card h-[77%] w-full rounded-tl-sm rounded-tr-sm p-8 md:h-[80%]">
        <Card
          alt={'name'}
          className="h-full w-full object-contain"
          fileClassName=" h-full w-full !object-contain"
          src={src as string}
        />
      </div>
      <div className="flex h-[23%] w-full max-w-full items-start justify-start px-4 py-3 sm:text-center md:h-[20%]">
        <Typography className="w-full text-start font-Poppins text-body font-bold leading-paragraph text-gray">
          What’s a crypto wallet and how do they work?
        </Typography>
      </div>
    </div>
  )
}
export default GalleryCard
