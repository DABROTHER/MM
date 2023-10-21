import React, { useState, useEffect, useRef } from 'react'

import Image from '../Image'
import Spinner from '../Spinner'

import { DefaultTabProps } from './interface'

import Typography from 'design-systems/Atoms/Typography'

const Tab: React.FC<DefaultTabProps> = ({
  tabs = [],
  defaultTab,
  active,
  setActive,
  tabWrpWidth,
  tabItemWrp,
  tabItemClass,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [indicatorPosition, setIndicatorPosition] = useState<number>(0)
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0)

  const indicatorRef = useRef<HTMLDivElement | null>(null) // Specify the type of indicatorRef

  useEffect(() => {
    const tabIdx = tabs.findIndex(tab => tab.value === activeTab)
    const tabWidth = tabWrpWidth / tabs.length // Calculate the width of each tab
    const newPosition = tabWidth * tabIdx
    setIndicatorPosition(newPosition)

    // Calculate the width of the active tab's text content
    const activeTabElement = document.querySelector(`.${tabItemClass}.active-tab`) as HTMLElement // Type assertion
    if (activeTabElement) {
      const activeTabTextWidth = activeTabElement.offsetWidth
      setIndicatorWidth(activeTabTextWidth)
    }

    if (indicatorRef.current) {
      indicatorRef.current.style.transform = `translateX(${newPosition}px)`
      indicatorRef.current.style.width = `${indicatorWidth}px`
    }
  }, [activeTab, tabs, tabWrpWidth, indicatorWidth, tabItemClass])

  useEffect(() => {
    setActiveTab(defaultTab)
  }, [defaultTab])

  const handleTabClick = (tabValue: string) => {
    setActiveTab(tabValue)

    if (setActive) {
      if (tabValue) {
        setActive(tabValue)
      } else if (active) {
        setActive(active)
      }
    }
  }

  return (
    <div className="flex">
      <div
        className={`${className} tabs relative flex rounded-sm border border-solid border-xlightGray bg-xlightGray`}
        style={{ width: `${tabWrpWidth}px` }}
      >
        {tabs.map(({ value, Label, type, hoverLabel }) => (
          <div
            className={`relative z-10 cursor-pointer px-[12.8px] py-3 font-Poppins text-base font-semibold leading-[145%] text-lightGray transition-all duration-300 ${tabItemClass} ${
              value === activeTab ? 'active-tab !text-black' : ''
            }`}
            key={value}
            style={{ width: `${tabItemWrp}px` }}
            onClick={() => {
              handleTabClick(value)
            }}
          >
            {type === 'string' ? (
              <Typography>{Label}</Typography>
            ) : type === 'component' ? (
              value === activeTab ? (
                <Label fill="black" stroke="black" />
              ) : (
                <Label />
              )
            ) : (
              <>
                {hoverLabel && Label ? (
                  <>
                    {value === activeTab ? <Image alt="tabImg" src={Label} /> : <Image alt="tabImg" src={hoverLabel} />}
                  </>
                ) : (
                  <Spinner />
                )}
              </>
            )}
          </div>
        ))}
        <div
          className="tab-item-animate absolute bottom-0 h-full rounded-sm bg-white transition-transform duration-300"
          ref={indicatorRef}
          style={{ width: `${indicatorWidth}px`, transform: `translateX(${indicatorPosition}px)` }}
        ></div>
      </div>
    </div>
  )
}
export default Tab
