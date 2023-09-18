import { Fragment, useCallback, useState } from 'react'

import { CategoriesProps } from './interface'

import { compareStringsInsentively } from 'utils'

const CategoryList: React.FC<CategoriesProps> = ({ categories, className, fill = false, onClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories?.[0].name)

  const handleSelectCategory = useCallback(
    (categoryId: ExploreBlock) => () => {
      setSelectedCategory(categoryId?.name)
      onClick?.(categoryId)
    },
    [selectedCategory, onClick]
  )
  const getButtonStyle = (name: string) => {
    const categoryClassName = `text-lightGray flex flex-col justify-center font-Poppins text-md smd:text-body font-semibold leading-[145%] hover:text-black ${
      fill
        ? 'rounded-sm p-[16px] item-center hover:!bg-neutral-100 !min-w-[57px] hover:text-neutral-800 text-center item-center'
        : ' '
    }`
    if (compareStringsInsentively(String(selectedCategory), name)) {
      if (fill) return `${categoryClassName} !bg-neutral-100 text-neutral-800 text-center item-center `
      return ` ${categoryClassName}  active !mb-[-4px]`
    }
    return categoryClassName
  }
  return (
    <div className={`flex w-full flex-wrap items-baseline gap-3 ${className}`}>
      {categories?.map((category, i) => (
        <Fragment key={i}>
          <button
            className={`hoverAnimation h-[48px] ${getButtonStyle(category.name)}`}
            type="button"
            onClick={handleSelectCategory(category)}
          >
            {category.name}
          </button>
        </Fragment>
      ))}
    </div>
  )
}
export default CategoryList
