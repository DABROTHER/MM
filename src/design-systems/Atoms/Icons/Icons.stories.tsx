import { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'

import { IconProps } from './interface'

import {
  SearchIcon,
  HeaderLogoText,
  AccountIcon,
  CartIcon,
  WalletIcon,
  IconNavMobile,
  IconArrowWhite,
  IconCheck,
  CircleIcon,
  DropDownIcon,
  IconLikeFill,
  IconLiked,
  IconHeartFill,
  IconHeart,
  MMIcon,
} from '.'

const meta: Meta<any> = {
  title: 'Atoms/Icons',
  //   component: MMIcon,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

interface ComponentProps extends IconProps {
  Icon: ComponentType<IconProps>
}

export default meta
type Story = StoryObj<typeof MMIcon>

// export const MMIco: Story = {
//   args: {
//     className: '',
//   },
// }

// Story for MMIcon
export const MMIconLogo: Story = () => <MMIcon className="" />
MMIconLogo.args = {
  className: '',
}

// Story for SearchIcon
export const HeaderSearchIcon: Story = () => <SearchIcon className="" />
HeaderSearchIcon.args = {
  className: '',
}

export const HeaderTextLogo: Story = () => <HeaderLogoText className="" />
HeaderTextLogo.args = {
  className: '',
}

export const IconAccount: Story = () => <AccountIcon className="" />
IconAccount.args = {
  className: '',
}

export const IconCart: Story = () => <CartIcon className="" />
IconCart.args = {
  className: '',
}

export const IconWallet: Story = () => <WalletIcon className="" />
IconWallet.args = {
  className: '',
}
export const NavMobileIcon: Story = () => <IconNavMobile className="" />
NavMobileIcon.args = {
  className: '',
}
export const ArrowWhiteIcon: Story = () => <IconArrowWhite className="" />
ArrowWhiteIcon.args = {
  className: '',
}
export const CheckIcon: Story = () => <IconCheck className="" />
CheckIcon.args = {
  className: '',
}
export const IconCircle: Story = () => <CircleIcon className="" />
IconCircle.args = {
  className: '',
}
export const IconDropdown: Story = () => <DropDownIcon className="" />
IconDropdown.args = {
  className: '',
}
export const LikeFillIcon: Story = () => <IconLikeFill className="" />
LikeFillIcon.args = {
  className: '',
}
export const LikedIcon: Story = () => <IconLiked className="" />
LikedIcon.args = {
  className: '',
}
export const HeartFillIcon: Story = () => <IconHeartFill className="" />
HeartFillIcon.args = {
  className: '',
}
export const HeartIcon: Story = () => <IconHeart className="" />
HeartIcon.args = {
  className: '',
}
