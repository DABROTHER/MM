'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { blockchainData } from './utils'

import BlockchainCard from 'design-systems/Molecules/Cards/BlockchainCard'
import { BlockchainCardProps } from 'design-systems/Molecules/Cards/BlockchainCard/interface'
import Typography from 'design-systems/Atoms/Typography'
import Button from 'design-systems/Atoms/Button'
import { IconRightArrowBlack } from 'design-systems/Atoms/Icons'

const ChooseBlockchain: React.FC = () => {
  const [selectedBlockchain, setSelectedBlockchain] = useState<string>('')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="container mb-[103px] mt-[25px]">
      <div className="mb-[28px] text-left smd:mb-[33px]">
        <Typography className="mb-0 font-Poppins text-[24px] font-semibold smd:text-xl" variant="regular">
          Choose Blockchain
        </Typography>
        <Typography className="font-Poppins text-md font-medium smd:text-base" variant="regular">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </div>
      <div className="flex justify-between gap-1 sm:gap-4 smd:gap-4 xl:gap-4">
        {blockchainData.map((blockchain: BlockchainCardProps, i: number) => (
          <BlockchainCard
            height={isMobile ? blockchain.heightMobile : blockchain.height}
            image={blockchain.image}
            imageWhite={blockchain.imageWhite}
            key={i}
            name={blockchain.name}
            width={isMobile ? blockchain.widthMobile : blockchain.width}
            onClick={() => setSelectedBlockchain(blockchain.name)}
            selectedBlockchain={selectedBlockchain}
          />
        ))}
      </div>

      <div className="flex justify-end pt-8">
        {selectedBlockchain ? (
          <Link href="/create/stepTwo">
            <Button
              className="ml-auto !gap-[76px] bg-cover bg-center px-[15px] py-[10.8px] md:!gap-3"
              disabled={!selectedBlockchain ? true : false}
            >
              Continue
              <IconRightArrowBlack height={16} width={8} />
            </Button>
          </Link>
        ) : (
          <Button className="ml-auto !gap-[76px] bg-cover bg-center px-[15px] py-[10.8px] md:!gap-3" disabled={true}>
            Continue
            <IconRightArrowBlack height={16} width={8} />
          </Button>
        )}
      </div>
    </div>
  )
}

export default ChooseBlockchain
