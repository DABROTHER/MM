import Carousel from 'react-multi-carousel'

import { CarouselProps } from './interface'

import 'react-multi-carousel/lib/styles.css'
import IconButton from 'design-systems/Atoms/IconButton'
import { IconLeftArrowBlack, IconRightArrowBlack } from 'design-systems/Atoms/Icons'

const CardCarousel: React.FC<CarouselProps> = ({
  className = '',
  activeSlide = () => {},
  cols = 4,
  withArrows = true,
  withIndicators = false,
  elements = [],
  removeArrowOnDeviceType = [],
  itemClass = '',
  mobileCols,
  tabletCols,
  landscapeCols,
  slidesToSlide = 1,
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: cols,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1131 },
      items: cols,
    },
    tablet: {
      breakpoint: { max: 1131, min: 786 },
      items: cols == 1 ? 1 : tabletCols ? tabletCols : 3,
    },
    landscape: {
      breakpoint: { max: 768, min: 659 },
      items: landscapeCols ? landscapeCols : 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 481 },
      items: mobileCols ? mobileCols : 2,
    },
    smallMobile: {
      breakpoint: { max: 480, min: 0 },
      items: mobileCols ? mobileCols : 1.42,
    },
  }

  const classNames = ['relative -mx-2', className].join(' ')
  const itemClasses = [' px-2', itemClass].join(' ')
  return (
    <div className={classNames}>
      <Carousel
        afterChange={(previousSlide, state) => activeSlide(previousSlide, state)}
        arrows={withArrows}
        autoPlay={false}
        autoPlaySpeed={5000}
        className="gd-carousel rounded-none smd:rounded-sm"
        containerClass="!static"
        customLeftArrow={
          <IconButton
            // eslint-disable-next-line react/no-children-prop
            children={<IconLeftArrowBlack className="flex" />}
            className="custom-button-arrow button-icon-shadow !left-0 top-[45.4%] -translate-y-1/2 transform cursor-pointer rounded-xs border  border-lightGray bg-neutral-800 opacity-0 hover:border-black lg:!left-[-10px]"
          />
        }
        customRightArrow={
          <IconButton
            //eslint-disable-next-line react/no-children-prop
            children={<IconRightArrowBlack className="flex" />}
            className="custom-button-arrow button-icon-shadow absolute !right-0 top-[45.4%] -translate-y-1/2 transform cursor-pointer rounded-xs border border-lightGray bg-neutral-800 opacity-0 hover:border-black lg:!right-[-10px]"
          />
        }
        dotListClass="indicator_wrp"
        draggable={true}
        infinite={false}
        itemClass={itemClasses}
        removeArrowOnDeviceType={removeArrowOnDeviceType}
        responsive={responsive}
        showDots={withIndicators}
        slidesToSlide={slidesToSlide}
        swipeable={true}
      >
        {Array.isArray(elements) &&
          elements.map((element, i) => (
            <div className="flex" key={i}>
              {element}
            </div>
          ))}
      </Carousel>
    </div>
  )
}
export default CardCarousel
