'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { accordionData } from '../Resources/utils'

import { ArticleTemplateProps } from './interface'

import AuthorImage from 'assets/images/author.png'
import Typography from 'design-systems/Atoms/Typography'
import { BackBtnIcon, GettingStartedIcon } from 'design-systems/Atoms/Icons'
import ArticleAccordion from 'design-systems/Molecules/ArticleAccordion'
import { ArticleAccordionProps } from 'design-systems/Molecules/ArticleAccordion/interface'

const ArticleTemplate: React.FC<ArticleTemplateProps> = () => {
  const router = useRouter()

  return (
    <div className="container mb-[71px]">
      <div className="mt-8">
        <div className="flex cursor-pointer items-center justify-start gap-3" onClick={() => router.push('/resources')}>
          <BackBtnIcon />
          <Typography className="font-Poppins text-base font-semibold text-black">Back to articles</Typography>
        </div>

        <Typography className="mt-[19px] text-left text-[32px] font-semibold text-black smd:mt-[25px] smd:text-xl">
          Article title
        </Typography>

        {/* author container */}
        <div className="mt-[20px] flex justify-between smd:mt-[26px]">
          <div className="flex items-center justify-center gap-3">
            <div className="h-[72px] w-[72px]">
              <Image src={AuthorImage} width={0} height={0} alt="author image" className="rounded-sm" />
            </div>

            <div className="flex flex-col items-start justify-start">
              <Typography className="font-Poppins text-base font-semibold text-black">Author Name</Typography>
              <Typography className="font-Poppins text-md font-medium text-black">1 month ago</Typography>
            </div>
          </div>

          <div className="border-lightgray flex h-[72px] w-[72px] items-center justify-center rounded-sm border border-solid">
            <GettingStartedIcon />
          </div>
        </div>
        {/* main content */}

        <div>
          <Typography className="mt-[34px] text-left font-Poppins text-base font-semibold text-black">
            Question One?
          </Typography>

          {/* paragraph container */}
          <div className="mt-[22px] flex flex-col gap-[18px] text-left text-md font-normal">
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pulvinar at diam leo urna, augue magnis ac
              nisi. Aenean nunc dignissim tristique et dictumst nulla aliquam quisque. Ipsum vitae id amet quis.
              Placerat risus sed adipiscing quam accumsan. Mattis ornare eget eget sit dis magna pharetra aliquam
              vestibulum. Ipsum ut viverra mi gravida cursus tristique pellentesque nunc gravida. Sollicitudin quis
              fringilla velit aliquet.{' '}
            </Typography>
            <Typography>
              Pharetra sit tempus, viverra amet vel vel, nisl amet elit. Mauris ut imperdiet viverra aliquam tincidunt
              tempor tincidunt. Lorem felis justo laoreet consequat metus. Pulvinar lectus bibendum eu, neque at. Amet
              sapien id sodales vulputate nec rhoncus quis pellentesque. Vitae a, interdum posuere risus accumsan risus.
              Ut tortor in vitae sed sagittis neque in. In mauris maecenas amet morbi vivamus a euismod. Dui cursus id
              cursus quisque rutrum erat.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pulvinar at diam leo urna, augue magnis ac
              nisi. Aenean nunc dignissim tristique et dictumst nulla aliquam quisque. Ipsum vitae id amet quis.
              Placerat risus sed adipiscing quam accumsan. Mattis ornare eget eget sit dis magna pharetra aliquam
              vestibulum. Ipsum ut viverra mi gravida cursus tristique pellentesque nunc gravida. Sollicitudin quis
              fringilla velit aliquet.
            </Typography>
            <Typography>
              Pharetra sit tempus, viverra amet vel vel, nisl amet elit. Mauris ut imperdiet viverra aliquam tincidunt
              tempor tincidunt. Lorem felis justo laoreet consequat metus. Pulvinar lectus bibendum eu, neque at. Amet
              sapien id sodales vulputate nec rhoncus quis pellentesque. Vitae a, interdum posuere risus accumsan risus.
              Ut tortor in vitae sed sagittis neque in. In mauris maecenas amet morbi vivamus a euismod. Dui cursus id
              cursus quisque rutrum erat.
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pulvinar at diam leo urna, augue magnis ac
              nisi. Aenean nunc dignissim tristique et dictumst nulla aliquam quisque. Ipsum vitae id amet quis.
              Placerat risus sed adipiscing quam accumsan. Mattis ornare eget eget sit dis magna pharetra aliquam
              vestibulum. Ipsum ut viverra mi gravida cursus tristique pellentesque nunc gravida. Sollicitudin quis
              fringilla velit aliquet.{' '}
            </Typography>
            <Typography>
              Pharetra sit tempus, viverra amet vel vel, nisl amet elit. Mauris ut imperdiet viverra aliquam tincidunt
              tempor tincidunt. Lorem felis justo laoreet consequat metus. Pulvinar lectus bibendum eu, neque at. Amet
              sapien id sodales vulputate nec rhoncus quis pellentesque. Vitae a, interdum posuere risus accumsan risus.
              Ut tortor in vitae sed sagittis neque in. In mauris maecenas amet morbi vivamus a euismod. Dui cursus id
              cursus quisque rutrum erat.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit pulvinar at diam leo urna, augue magnis ac
              nisi. Aenean nunc dignissim tristique et dictumst nulla aliquam quisque. Ipsum vitae id amet quis.
              Placerat risus sed adipiscing quam accumsan. Mattis ornare eget eget sit dis magna pharetra aliquam
              vestibulum. Ipsum ut viverra mi gravida cursus tristique pellentesque nunc gravida. Sollicitudin quis
              fringilla velit aliquet.
            </Typography>
            <Typography>
              Pharetra sit tempus, viverra amet vel vel, nisl amet elit. Mauris ut imperdiet viverra aliquam tincidunt
              tempor tincidunt. Lorem felis justo laoreet consequat metus. Pulvinar lectus bibendum eu, neque at. Amet
              sapien id sodales vulputate nec rhoncus quis pellentesque. Vitae a, interdum posuere risus accumsan risus.
              Ut tortor in vitae sed sagittis neque in. In mauris maecenas amet morbi vivamus a euismod. Dui cursus id
              cursus quisque rutrum erat.
            </Typography>
          </div>

          <Typography className="mt-[18px] text-left font-Poppins text-subtitle font-semibold text-black smd:mt-6 smd:text-xl">
            Related articles
          </Typography>

          <div className="mt-[22px] smd:mt-[18px]">
            {accordionData.map((data: ArticleAccordionProps, i) => (
              <ArticleAccordion
                icon={data.icon}
                key={i}
                article={data.article}
                height={data.height}
                width={data.width}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleTemplate
