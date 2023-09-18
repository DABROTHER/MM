import { ButtonColor, ButtonSize } from './interface'

export const getButtonSize = (size: ButtonSize, loading: boolean, fullWidth: boolean) => {
  switch (size) {
    case 'small':
      return `${loading && !fullWidth ? 'w-70 h-30' : ''} px-lg py-sm text-sm leading-sm tracking-sm`
    case 'medium':
      return `${loading && !fullWidth ? 'w-100 h-9  ' : ''} px-4 py-3 text-base leading-md tracking-md`
    case 'large':
      return `${loading && !fullWidth ? 'w-133 h-51' : ''} px-3xl py-lg text-lg leading-lg tracking-lg`
    default:
      throw 'Wrong Button size ' + size
  }
}

export const getSolidButtonBorderStyles = (color: ButtonColor) => {
  switch (color) {
    case 'neon':
      return 'active:shadow-solid-brand-active'
    case 'primary':
      return 'active:shadow-solid-light-active dark:active:shadow-solid-dark-active'
    case 'secondary':
      return ''
    default:
      throw 'Wrong Solid Button color ' + color
  }
}

export const getOutlinedButtonBorderStyles = (color: ButtonColor) => {
  switch (color) {
    case 'neon':
      return 'shadow-outlined-brand-default active:shadow-outlined-brand-active disabled:shadow-outlined-brand-disabled'
    case 'primary':
      return 'shadow-outlined-light-default active:shadow-outlined-light-active disabled:shadow-outlined-light-disabled dark:shadow-outlined-dark-default dark:active:shadow-outlined-dark-active dark:disabled:shadow-outlined-dark-disabled'
    case 'secondary':
      return 'border'
    default:
      throw 'Wrong Solid Button color ' + color
  }
}

export const getSpinnerStokeColor = (color: ButtonColor) => {
  switch (color) {
    case 'neon':
      return 'stroke-neutral-100 dark:stroke-neutral-800'
    case 'primary':
      return 'stroke-neutral-800 dark:stroke-neutral-100'
    case 'secondary':
      return 'stroke-neutral-200 dark:stroke-neutral-700'
    default:
      throw 'Wrong Solid Button color ' + color
  }
}

export const getSpinnerSize = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return 'w-4 h-4'
    case 'medium':
      return 'w-5 h-5'
    case 'large':
      return 'w-8 h-8'
    default:
      throw 'Wrong Button size ' + size
  }
}
