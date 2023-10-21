import Link from 'next/link'

import { FooterProps, FooterType } from './interface'
import { Company, LinkCommStyle, LinkCommWrp, footerCommHead, footerCommText } from './utils'

import FooterForm from 'design-systems/Molecules/FooterSignUpForm'
import Typography from 'design-systems/Atoms/Typography'
import {
  IconTwitter,
  IconInsta,
  IconDiscord,
  IconYoutube,
  FooterLogoIcon,
  FooterResponsiveLogo,
} from 'design-systems/Atoms/Icons'
import { useExplore } from 'hooks'

const initialFilter = { categoryId: '', blockChainId: '', trending: '' }

const Footer: React.FC<FooterProps> = () => {
  const { exploreCategory } = useExplore(initialFilter)

  return (
    <footer>
      <div className="container block gap-4 lg:flex xlg:pb-10">
        <div className="mb-8 basis-[25%] pr-5 lg:mb-0 xlg:pr-0">
          <Link className="hidden smd:flex" href="/">
            <FooterLogoIcon />
          </Link>
          <Link className="flex smd:hidden" href="/">
            <FooterResponsiveLogo />
          </Link>
          <Typography className={`mt-4 !text-base !leading-[23px] ${footerCommText}`}>
            Connect with what moves you.
            <br /> Create what doesn&apos;t
          </Typography>
        </div>
        <div className="block basis-[75%] flex-row lg:flex lg:flex-row-reverse">
          <div className="mb-8 basis-[38%] lg:mb-0">
            <Typography className={`mb-[18px] ${footerCommHead}`}>Stay in the loop</Typography>
            <Typography className={`!leading-[20px] ${footerCommText}`} variant="condensed">
              Subscribe to our mailing to receive information on the latest scoop, web3 safety and exclusive news.
            </Typography>
            {/* footer sign-up form */}
            <FooterForm />
            <h3 className={`!mb-[19px] ${footerCommHead} mt-8`}>Stay in the loop</h3>

            <div className="justify-left flex gap-[10px] sm:justify-start">
              <Link className={LinkCommStyle} href="https://twitter.com/" target="_blank">
                <IconTwitter />
              </Link>

              <Link className={LinkCommStyle} href="https://www.instagram.com/" target="_blank">
                <IconInsta />
              </Link>

              <Link className={LinkCommStyle} href="https://www.youtube.com/" target="_blank">
                <IconYoutube />
              </Link>

              <Link className={LinkCommStyle} href="https://discord.com/" target="_blank">
                <IconDiscord />
              </Link>
            </div>
          </div>
          <div className="flex basis-[62%] flex-wrap gap-4 pb-3 xlg:pb-6">
            <div className="basis-w-2/6 pr-[15px] md:pr-[56px]">
              <div className={LinkCommWrp}>
                <Typography className={footerCommHead}>Marketplace</Typography>
                <div className="flex flex-col">
                  {exploreCategory &&
                    exploreCategory.map((item: ExploreBlock) => (
                      <Link className={`hoverAnimation ${footerCommText}`} href="" key={item.id}>
                        {item.name}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
            <div className="basis-w-2/6 pr-[15px] md:pr-[56px]">
              <div className={LinkCommWrp}>
                <Typography className={footerCommHead}>Company</Typography>
                <div className="flex flex-col">
                  {Company.map((item: FooterType) => (
                    <Link className={`hoverAnimation ${footerCommText}`} href="" key={item.id}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="basis-w-2/6 pr-[15px] md:pr-[56px]">
              <div className={LinkCommWrp}>
                <h3 className={footerCommHead}>Resources</h3>
                <div className="flex flex-col">
                  {Company.map((item: FooterType) => (
                    <Link className={`hoverAnimation ${footerCommText}`} href="" key={item.id}>
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
