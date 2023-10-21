import Typography from 'design-systems/Atoms/Typography'
import Image from 'design-systems/Atoms/Image'

import { ArtistCardInfoProps } from './interface'
import Link from 'next/link'

const ArtistCardInfo: React.FC<ArtistCardInfoProps> = ({ artistImage, name, className, mintSocialData }) => {
  return (
    <div
      className={`flex items-start gap-4 pb-4 pl-[14px] pt-3 xlg:gap-5 xl:gap-4 ${className}`}
      //   className={`grid grid-cols-2 py-[14px] ${className}`}
    >
      <div className="w-[22%]xl:w-[21%]">
        <Image
          height={0}
          width={0}
          src={artistImage as string}
          alt="artist"
          className="h-[72px] w-[72px] rounded-[50%] pt-1 smd:h-[112px] smd:w-[112px]"
        />
      </div>
      <div className="w-[88%] xl:w-[79%]">
        {' '}
        <Typography className="mb-1 text-left font-Poppins text-base font-semibold text-black">{name}</Typography>
        <Typography className="hidden text-left font-Poppins text-sm font-normal text-black smd:block smd:text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada in pulvinar enim a, enim, pharetra, etiam
          dignissim rhoncus. In viverra tristique nec dictum at. Tempus at nunc, pretium nunc mattis risus adipiscing
          nisi. Et tincidunt a cras justo morbi sem. Massa, lacus volutpat egestas velit. Viverra velit condimentum amet
          sed id. Pellentesque nec phasellus in sit habitant imperdiet. Convallis sed vitae nulla potenti. Sem in nibh
          sit nisl risus commodo ipsum id turpis.
        </Typography>
        <Typography className="block text-left font-Poppins text-sm font-normal text-black smd:hidden">
          Lorem ipsum dolor sit amet consectetur. Consectetur pulvinar quis vitae ac. Non praesent velit habitasse arcu
          elementum scelerisque non purus sollicitudin. At amet tellus porta gravida dolor facilisi gravida varius. Erat
          pharetra blandit ultrices nunc cursus dignissim.
        </Typography>
        <div className="mt-[10px] flex gap-3">
          {mintSocialData &&
            mintSocialData.map(({ url, target, Icon }, i) => {
              return (
                <Link
                  className="flex h-12 w-12 items-center justify-center gap-3 rounded-sm border border-lightGray p-2 hover:border-black"
                  href={url}
                  key={i}
                  target={target}
                >
                  <Icon />
                </Link>
              )
            })}
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default ArtistCardInfo
