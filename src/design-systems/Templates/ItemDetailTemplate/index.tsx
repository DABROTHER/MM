/* eslint-disable react/no-children-prop */
import { useMemo, useState } from 'react'

import { CATEGORY_ITEM_DETAILS, ITEM_DETAILS_DATA } from './utils'

import Button from 'design-systems/Atoms/Button'
import { CartIcon, IconCheck, IconHeart } from 'design-systems/Atoms/Icons'
import Typography from 'design-systems/Atoms/Typography'
import Card from 'design-systems/Molecules/Cards/Card'
import CategoryList from 'design-systems/Organisms/List/CategoryList'
import { formatAddress, formatLike } from 'utils'
import CollectionCardInfo from 'design-systems/Molecules/CardsInfo/CollectionCardInfo'
import ItemProperties from 'design-systems/Organisms/ItemDetails/ItemProperties'
import { User } from 'design-systems/Organisms/ItemDetails/ItemProperties/interface'
import CardCarousel from 'design-systems/Molecules/Carousel'

interface ItemDetailCardHeaderProps {
  FirstIcon: React.ReactNode
  secondIcon: React.ReactNode
  thirdIcon?: React.ReactNode
  text: string
  children?: React.ReactNode
}
const ItemDetailCardHeader: React.FC<ItemDetailCardHeaderProps> = ({
  FirstIcon,
  secondIcon,
  text,
  children,
  thirdIcon,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="mt-7 flex w-full cursor-pointer flex-col rounded-sm border border-lightGray p-4">
      <div className="flex w-full flex-row justify-between" onClick={() => setIsOpen(pre => !pre)}>
        <div className="flex flex-row gap-3">
          {FirstIcon}
          <Typography className="font-Poppins text-body font-semibold leading-[23.2px]">{text}</Typography>
        </div>
        {isOpen ? thirdIcon : secondIcon}
      </div>
      {isOpen && children}
    </div>
  )
}
const UIdesign = {
  cardClassName: 'w-full',
  className: 'w-full grid-cols-2 md:grid-cols-3 lmd:grid-cols-4 slg:grid-cols-5 xlg:!grid-cols-5',
  fileClassName: '!h-[182px] lg:!h-[179.2px]  xlg:!h-[214.39px] xl:!h-[262.4px]',
  cardInfoMT: 'mt-[3px]',
}

const ItemDetailTemplate: React.FC = () => {
  const [category, setCategory] = useState<ExploreBlock>({ name: 'About', id: 'about' })
  const [itemDetailsCard, setItemDetailsCard] = useState<React.ReactElement[]>([])
  const Properties: User[] = [
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Color
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          gold 10%
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Clothing
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          mask 15%
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Accessory
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          cyberjaw 10%
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Background
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          bunker 6%
        </Typography>
      ),
    },
  ]
  const Details: User[] = [
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Contact address
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          0x74...e61031
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Token ID
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          4594
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Blockchain
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          Ethereum
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Creator fee
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          2%
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Token info
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          IPFS
        </Typography>
      ),
    },
    {
      price: (
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px] text-neutral-100">
          Token standard
        </Typography>
      ),
      usdPrice: (
        <Typography className=" text-end font-Poppins text-body font-semibold leading-[23.2px] text-lightGray">
          ERC721
        </Typography>
      ),
    },
  ]
  useMemo(
    () =>
      setItemDetailsCard(
        Array(8)
          .fill('')
          .map((_, i) => (
            <Card
              alt={'name'}
              // eslint-disable-next-line react/no-children-prop
              children={
                <CollectionCardInfo
                  cardInfoMT={UIdesign?.cardInfoMT}
                  className="!pt-[11px]"
                  data={[{ 'Price': `${12} ETH`, 'Highest Bid': `${12} ETH` }]}
                  name={'Bored Ape Kennel Club #4594'}
                />
              }
              className={`${UIdesign?.cardClassName} group `}
              direction="y-direction"
              fileClassName={UIdesign?.fileClassName}
              key={i}
              src={'http://res.cloudinary.com/ddkpnnmae/image/upload/v1687861654/imgs-mm/lmt67mr4wh0qmkv1dsmq.jpg'}
              variant="top"
            />
          ))
      ),
    []
  )
  return (
    <div className="container mb-[72px]">
      <div className="mt-[28px] flex w-full flex-col gap-4 lmd:flex-row">
        <div className="flex w-full lmd:w-1/2">
          <Card
            alt={'name'}
            className="h-[405px] w-full lmd:h-[504px] "
            fileClassName=""
            src={'http://res.cloudinary.com/ddkpnnmae/image/upload/v1687861654/imgs-mm/lmt67mr4wh0qmkv1dsmq.jpg'}
          />
        </div>
        <div className="flex w-full flex-col rounded-sm border border-lightGray px-4 pt-[14px] lmd:w-1/2">
          <div className="flex flex-row items-center gap-[9px]">
            <Card
              alt={'name'}
              borderSize="xs"
              className="h-12 w-12"
              fileClassName=""
              src={'http://res.cloudinary.com/ddkpnnmae/image/upload/v1687861654/imgs-mm/lmt67mr4wh0qmkv1dsmq.jpg'}
            />
            <Typography className=" h-fit font-Poppins !font-bold leading-[23.2px]" size="body">
              Bored Ape Yacht Club
              <IconCheck className="ml-3 inline-block" height={15} width={15} />
            </Typography>
          </div>
          <Typography className="mt-[6px] text-start font-Poppins text-xl font-semibold leading-[43.5px]">
            Bored Ape Kennel Club #4594
          </Typography>
          <div className="flex flex-row justify-between">
            <Typography className="leading-[17.4px ] text-start font-Poppins text-caption font-semibold">
              Current owner
              <Typography className="ml-1 inline-block font-Poppins text-md font-semibold leading-[145%] text-[#DB417D]">
                {formatAddress('0x74...e61031')}
              </Typography>
            </Typography>
            <div className="flex flex-row gap-3">
              <Typography className="text-right font-Poppins text-md font-semibold leading-[20.3px] text-neutral-100">
                <IconHeart className="mr-3 inline-block" height={14} width={16} />
                {formatLike(100)}
              </Typography>
            </div>
          </div>
          <div className=" mt-[18px] flex flex-col justify-between gap-1 md:flex-row md:gap-0 lmd:mt-[62px] slg:mt-[80px] xlg:mt-[123px]">
            <Typography className="leading-[23.2px ] text-start font-Poppins text-body font-semibold">
              Category
              <Typography className="ml-1 inline-block font-Poppins text-body font-semibold leading-[145%] text-lightGray">
                PFPs
              </Typography>
            </Typography>
            <Typography className="leading-[23.2px ] text-start font-Poppins text-body font-semibold">
              Auction Ends:
              <Typography className="ml-1 inline-block font-Poppins text-body font-semibold leading-[145%] text-lightGray">
                March 26th, 2023
              </Typography>
            </Typography>
          </div>
          <div className="mt-[11px] flex flex-row justify-between border-y-2 border-grayBorder py-[11px]">
            <div className="flex flex-col">
              <Typography className="text-start font-Poppins text-md font-semibold leading-[20.3px] text-lightGray">
                Price
              </Typography>
              <Typography className="font-Poppins text-body font-semibold leading-[145%] text-neutral-100">
                0.3 ETH
                <Typography className="ml-1 inline-block font-Poppins text-md font-semibold leading-[145%] text-lightGray">
                  $11,000
                </Typography>
              </Typography>
            </div>
            <div className="flex flex-col items-end">
              <Typography className="font-Poppins text-md font-semibold leading-[20.3px] text-lightGray">
                Current best offer
              </Typography>
              <Typography className="font-Poppins text-body font-semibold leading-[145%] text-neutral-100">
                0.2015 ETH
              </Typography>
            </div>
          </div>
          <Button className="mt-4 flex h-12 w-full items-center justify-center px-3 py-4 text-center font-Poppins leading-[23.3px]">
            Bid Now
          </Button>
          <div className="mb-4 mt-4 flex flex-row gap-3 lmd:mb-0">
            <Button className=" flex h-12 w-full items-center justify-center px-3 py-4 text-center font-Poppins leading-[23.3px]">
              Buy Now
            </Button>
            <div className="h-12 w-12 cursor-pointer items-center rounded-[12px] border border-lightGray px-3 py-[11px] hover:border-black">
              <CartIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full border-b-2 border-grayBorder">
        <div className="flex w-full flex-col">
          <CategoryList categories={CATEGORY_ITEM_DETAILS} onClick={e => setCategory(e)} />
        </div>
      </div>
      {category?.name === 'About' ? (
        <Typography className="mt-[23px] flex w-full flex-col justify-center text-start font-Poppins text-md font-medium leading-[20.3px] text-neutral-100 lmd:w-[680px]">
          Lorem ipsum dolor sit amet consectetur. Adipiscing placerat morbi egestas eget viverra suscipit bibendum. Sed
          aliquam nisl massa libero sed in felis imperdiet posuere. Vivamus pellentesque consectetur bibendum aliquam.
          <Typography className="mt-2">
            Nullam nunc augue velit vulputate consequat. Nec facilisis volutpat sed urna sagittis. Ac feugiat rhoncus id
            eget sit.
          </Typography>
        </Typography>
      ) : (
        <div className={`mt-[23px] flex w-full rounded-sm border border-lightGray slg:w-[680px] `}>
          <ItemProperties Properties={category?.name === 'Properties' ? Properties : Details} />
        </div>
      )}

      {ITEM_DETAILS_DATA.map(({ FirstIcon, SecondIcon, text, Children }, i) => (
        <ItemDetailCardHeader
          FirstIcon={<FirstIcon />}
          children={<Children />}
          key={i}
          secondIcon={<SecondIcon className="rotate-180 transform transition-transform duration-300 ease-in" />}
          text={text}
          thirdIcon={<SecondIcon className="rotate-0 transform transition-transform duration-300 ease-in" />}
        />
      ))}
      <div className="mt-[26px] flex flex-col">
        <Typography className="text-start font-Poppins text-body font-semibold leading-[23.2px]">
          More from this collection
        </Typography>
        <div className="comm_carousel_arrow comm-bottom-gap mt-6 w-full">
          <CardCarousel cols={5} elements={itemDetailsCard} landscapeCols={3} tabletCols={4} />
        </div>
      </div>
    </div>
  )
}
export default ItemDetailTemplate
